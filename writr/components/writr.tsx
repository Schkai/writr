import React from 'react';
import Form from './form';
import Results from './results';

const Writr: React.FC = () => {
    const API = process.env.NEXT_PUBLIC_API_ENDPOINT;
    const CHARACTER_LIMIT: number = 32;
    const [prompt, setPrompt] = React.useState('');
    const [snippet, setSnippet] = React.useState('');
    const [keywords, setKeyWords] = React.useState([]);
    const [hasResult, setHasResult] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const generate = () => {
        console.log('Submitted: ', prompt);
        setIsLoading(true);
        fetch(`${API}generate_all?prompt=${prompt}`)
            .then((response) => response.json())
            .then(onGenerated);
    };

    const onGenerated = (data: any) => {
        setSnippet(data.snippet);
        setKeyWords(data.keywords);
        setHasResult(true);
        setIsLoading(false);
    };

    const onBack = () => {
        setHasResult(false);
        setPrompt('');
        setIsLoading(false);
    };

    let shownElement = null;
    if (hasResult) {
        shownElement = (
            <Results
                snippet={snippet}
                keywords={keywords}
                prompt={prompt}
                onBack={onBack}
            />
        );
    } else {
        shownElement = (
            <Form
                prompt={prompt}
                setPrompt={setPrompt}
                generate={generate}
                isLoading={isLoading}
                limit={CHARACTER_LIMIT}
            />
        );
    }

    return (
        <div className="h-screen flex">
            <div className="max-w-md m-auto p-3">
                <h1 className="text-3xl underline mb-6">Writr! </h1>
                {shownElement}
            </div>
        </div>
    );
};

export default Writr;

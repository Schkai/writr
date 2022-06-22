const Results: React.FC<ResultProps> = (props) => {
    const keywordsElement = props.keywords.map((keyword, index) => {
        return <div key={index}>#{keyword}</div>;
    });

    return (
        <>
            <div>
                <div>
                    <div>
                        <b>Prompt</b>
                    </div>
                    <div>{props.prompt}</div>
                </div>
                <div>
                    <div>
                        <b>Snippet</b>
                    </div>
                    <div>{props.snippet}</div>
                </div>
                <div>
                    <div>
                        <b>Keywords:</b>
                    </div>
                    {keywordsElement}
                </div>
            </div>
            <button onClick={props.onBack}>Back</button>
        </>
    );
};

interface ResultProps {
    snippet: string;
    keywords: Array<string>;
    onBack: any;
    prompt: string;
}

export default Results;

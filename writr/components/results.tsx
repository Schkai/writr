const Results: React.FC<ResultProps> = (props) => {
    const keywordsElement = props.keywords.map((keyword, index) => {
        return <div key={index}>#{keyword}</div>;
    });

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="mb-10">
                        <div>
                            <div className="mb-1">
                                <b>Prompt</b>
                            </div>
                            <div className="mb-3">{props.prompt}</div>
                        </div>
                        <div>
                            <div className="mb-1">
                                <b>Snippet</b>
                            </div>
                            <div className="mb-3">{props.snippet}</div>
                        </div>
                        <div className="mb-1">
                            <div className="mb-3">
                                <b>Keywords:</b>
                            </div>
                            {keywordsElement}
                        </div>
                    </div>
                    <button
                        className="btn btn-secondary"
                        onClick={props.onBack}
                    >
                        Back
                    </button>
                </div>
            </div>
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

const Form: React.FC<FormProps> = (props) => {
    const checkValidPrompt = props.prompt.length < props.limit;
    const updatePromptValue = (text: string) => {
        if (text.length <= props.limit) props.setPrompt(text);
    };

    let statusColor = '';
    let statusText = null;
    if (!checkValidPrompt) {
        statusColor = 'text-red-500';
        statusText = `Prompt must be less than ${props.limit} characters.`;
    }

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className="mt-5 mb-5">
                        Tell me what you want to brand and generate a slogan
                    </p>
                    <input
                        className="input input-bordered input-lg"
                        type="text"
                        placeholder="coffee machine"
                        value={props.prompt}
                        onChange={(event) =>
                            updatePromptValue(event.currentTarget.value)
                        }
                    ></input>
                    <div
                        className={
                            statusColor +
                            ' flex justify-between my-2 mb-4 text-sm'
                        }
                    >
                        <div className="">{statusText}</div>
                        <div className="text-gray-400">
                            {props.prompt.length}/{props.limit}
                        </div>
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={props.generate}
                        disabled={props.isLoading || !checkValidPrompt}
                    >
                        Generate
                    </button>
                </div>
            </div>
        </>
    );
};

interface FormProps {
    prompt: string;
    setPrompt: any;
    generate: any;
    isLoading: boolean;
    limit: number;
}

export default Form;

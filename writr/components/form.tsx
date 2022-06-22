import { useState } from 'react';

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
            <p>Tell me what you want to brand and generate a slogan</p>
            <input
                type="text"
                placeholder="coffee machine"
                value={props.prompt}
                onChange={(event) =>
                    updatePromptValue(event.currentTarget.value)
                }
            ></input>
            <div
                className={
                    statusColor + ' flex justify-between my-2 mb-6 text-sm'
                }
            >
                <div>{statusText}</div>
                <div>
                    {props.prompt.length}/{props.limit}
                </div>
            </div>
            <button
                onClick={props.generate}
                disabled={props.isLoading || !checkValidPrompt}
            >
                Generate
            </button>
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

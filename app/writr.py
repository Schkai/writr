import os
from typing import List
import openai
from dotenv import load_dotenv
import argparse
import re

MAX_INPUT_LENGTH = 20
load_dotenv()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", "-i", type=str, required=True)
    args = parser.parse_args()
    user_input = args.input
    if validate_prompt(user_input):
        generate_snippet(user_input)
        generate_keywords(user_input)
    else:
        raise ValueError(
            f"Input length is too long. Must be under {MAX_INPUT_LENGTH} characters.")


def validate_prompt(prompt: str) -> bool:
    return len(prompt) <= MAX_INPUT_LENGTH


def generate_keywords(prompt: str) -> List[str]:
    openai.api_key = os.getenv("OPENAI_API_KEY")

    enriched_prompt = f"Create marketing keywords for {prompt}"
    print(enriched_prompt+":")
    response = openai.Completion.create(
        model="text-curie-001", prompt=prompt, max_tokens=50, temperature=0.9)

    # Extract text
    keywords_text: str = response["choices"][0]["text"]
    keywords_text.strip()

    keywords_array = re.split(",|\n|;|-", keywords_text)
    keywords_array = [keyword.lower().strip() for keyword in keywords_array]
    keywords_array = [
        keyword for keyword in keywords_array if len(keyword) > 0]

    return keywords_array


def generate_snippet(prompt: str):
    openai.api_key = os.getenv("OPENAI_API_KEY")

    enriched_prompt = f"Create a short marketing slogan for {prompt}"
    print(enriched_prompt+":")
    response = openai.Completion.create(
        model="text-curie-001", prompt=prompt, max_tokens=60, temperature=0.9)

    # Extract text
    copywrite_text: str = response["choices"][0]["text"].replace('\n', '')
    print(copywrite_text)
    copywrite_text.strip()
    last_char = copywrite_text[-1]

    # add ... for truncation
    if last_char not in {".", "!", "?"}:
        copywrite_text += "..."
    return copywrite_text


if __name__ == "__main__":
    main()

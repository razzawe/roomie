# Just need to replace placeholders (####) with actual queries
# Need to integrate into SageMaker pipeline
# Credit: https://github.com/McGill-NLP/llm2vec, https://github.com/MaartenGr/KeyBERT
import numpy as np
from sklearn.metrics.pairwise import paired_cosine_distances
from scipy.stats import spearmanr
import torch
from transformers import AutoTokenizer, AutoModel, AutoConfig
from peft import PeftModel
from llm2vec import LLM2Vec

PARAGRAPH_WEIGHT = 1
KEYWORDS_WEIGHT = 1
FEATURE_WEIGHT = 1 # how much you want the other features to influence



instruction = "Given 2 descriptions of students, determine if the students are similar to each other in terms of habits, interests, etc.: "
instruction_keywords = "Given 2 numbered lists, each with 5 keywords, determine if the lists are similar to each other based on the keywords: "

batch_size = 8

print("Loading model...")
embedding_model = LLM2Vec.from_pretrained(
    "McGill-NLP/LLM2Vec-Meta-Llama-3-8B-Instruct-mntp",
    peft_model_name_or_path="McGill-NLP/LLM2Vec-Meta-Llama-3-8B-Instruct-mntp-supervised", #most optimal
    device_map="cuda" if torch.cuda.is_available() else "cpu",
    torch_dtype=torch.bfloat16,
) # we now have a custom embedding model, will use it for paragraph and keywords


def append_instruction(instruction, sentences):
    new_sentences = []
    for s in sentences:
        new_sentences.append([instruction, s, 0])
    return new_sentences


print(f"Encoding user...")
user_paragraph = user_paragraph ############# ["this is my paragraph"]
user_paragraph = append_instruction(instruction, user_paragraph)
user_embeddings = np.asarray(embedding_model.encode(user_paragraph, batch_size=batch_size))

#getting keywords
from keybert import KeyBERT
keyword_model = keyBERT(model=embedding_model)
#will use maxsum distance for more diverse keywords
user_keywords_old = keyword_model.extract_keywords(user_paragraph[0][1], keyphrase_ngram_range=(1,1), use_maxsum=True, top_n=5)
#user_keywords_old = [('pokemon', 0.5), ('cooking', 0.2), ...]
user_keywords_string = f"1: {user_keywords_old[0][0]}, 2: {user_keywords_old[1][0]}, 3: {user_keywords_old[2][0]}, 4: {user_keywords_old[3][0]}, 5: {user_keywords_old[4][0]}"
user_keywords_new = append_instruction(instruction_keywords, user_keywords_string)
user_keyword_embeddings = np.asarray(embedding_model.encode(user_keywords_new, batch_size=batch_size))

print(f"Encoding others...")
results = {}
# for all other users:
for i in range(len(users)): #############
    other_paragraph = users[i].paragraph ########### ["this is another person's paragraph"]
    other_paragraph = append_instruction(instruction, other_paragraph)
    other_embeddings = np.asarray(embedding_model.encode(other_paragraph, batch_size=batch_size))
    other_keywords_old = keyword_model.extract_keywords(other_paragraph[0][1], keyphrase_ngram_range=(1,1), use_maxsum=True, top_n=5)
    other_keywords_string = f"1: {other_keywords_old[0][0]}, 2: {other_keywords_old[1][0]}, 3: {other_keywords_old[2][0]}, 4: {other_keywords_old[3][0]}, 5: {other_keywords_old[4][0]}"
    other_keywords_new = append_instruction(instruction_keywords, other_keywords_string)
    other_keyword_embeddings = np.asarray(embedding_model.encode(other_keywords_new, batch_size=batch_size))
    paragraph_scores = 1 - (paired_cosine_distances(user_embeddings, other_embeddings))
    keyword_scores = 1 - (paired_cosine_distances(user_embeddings, other_embeddings))
    feature_scores = sqrt(abs(other_feature - user_feature)^2 + ......^2) ############
    results[user] = paragraph_scores * PARAGRAPH_WEIGHT + keyword_scores * KEYWORDS_WEIGHT - feature_scores * FEATURE_WEIGHT


print(results)
# {user1: x, user2: y, ...}
def get_result(user):
    return results[user]
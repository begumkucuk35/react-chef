import { HfInference } from "@huggingface/inference";

// Ortam değişkeninden Hugging Face API anahtarını al
const hf = new HfInference(import.meta.env.REACT_APP_HF_API_KEY); // React'te REACT_APP_ ön eki gereklidir

// Sistem talimatlarını tanımla
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

// Tarifi almak için bir fonksiyon oluştur
export async function getRecipeFromHuggingFace(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  try {
    // Hugging Face API'sine istekte bulun
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1", // Kullanmak istediğiniz Hugging Face modelinin adı
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024, // Döndürülecek maksimum token sayısı
    });

    // Yanıtı döndür
    return response.choices[0].message.content;
  } catch (err) {
    console.error("Error fetching recipe:", err.message);
    return "Sorry, I couldn't fetch a recipe. Please try again later.";
  }
}

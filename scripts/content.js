//create elements
var div = document.createElement( 'div' );
var btnForm = document.createElement( 'form' );
var btn = document.createElement( 'input' );


//append all elements
window.onload = function() {
  const composePage = document.getElementsByClassName("ql-editor")[0];
  if (composePage)
  {
    document.body.appendChild( div );
    div.appendChild( btnForm );
    btnForm.appendChild( btn );
  }
}

document.body.appendChild( div );
div.appendChild( btnForm );
btnForm.appendChild( btn );

//set attributes for div
div.id = 'GPT3-Button';
div.style.position = 'fixed';
div.style.top = '10px';
div.style.left = '100px';
div.style.zIndex = '100';

//set attributes for btnForm
btnForm.action = '';

//set attributes for btn
//"btn.removeAttribute( 'style' );
btn.type = 'button';
btn.value = 'Expand';
btn.style.width = '100px';
btn.style.height = '30px';
btn.style.backgroundColor = '#669AAF';
btn.style.paddingTop = '5px';
btn.classList.add('bGkrbw');
btn.classList.add('jBoOet');
btn.classList.add('sc-186c5n9-0');
btn.classList.add('sc-3p1kfs-8');

//btn.style.position = 'absolute';
//btn.style.top = '50%';
//btn.style.left = '50%';

btn.addEventListener("click", (event) => {});

btn.onclick = (event) => {
  const editorContent = document.getElementsByClassName("ql-editor")[0].textContent
  if (editorContent)
  {
    /*
    alert(editorContent);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setResult(data.result);
    */
  }
  else {
    alert('no content');
  }
};

function setResult(expansionText) {
  document.getElementsByClassName("ql-editor")[0].textContent = expansionText;
}

/*
const configuration = new Configuration({
  apiKey: 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,
});
const openai = new OpenAIApi(configuration);
*/
/*
export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(),
    temperature: 0.2,
    max_tokens: 1000
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}
*/

function generatePrompt(bodyText) {
  return `Expand on a specific trait of Ilya and why it is very, very positive.

Trait: Eyes
Explaination: Ilya's eyes are the deepest blue. They shine like light refracting off the most still alpine lake. When you look into Ilya's eyes, you see the universe.
Trait: Handsome
Explaination: The bone structure of Ilya makes Mr Universe look like a pile of wet socks. Ilya can make every lady in a 1 miles radius swoon. 
Trait: Honest
Explaination: Ilya has never told a lie in 33 years of being on planet earth. When he speaks you feel the truth echoing in every fiber of your being.
Trait: ${bodyText}
Explaination:`;
}

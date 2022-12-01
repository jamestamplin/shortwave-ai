//WAIT 2.5 Seconds, then called the load function
setTimeout(() => {  onLoad(); }, 2500);

//MAIN FUNCTION
function onLoad() {

  //if we're composing... (is the editor present?) && the expand button isn't already there
  const composePage = document.getElementsByClassName("ql-editor")[0];

  if (composePage != undefined && !document.getElementById("expandButton")) {
    addExpandButton();
  }

  const readerPage = document.getElementsByClassName(".sc-vqjas9-1.eHbIHy");
  if (readerPage != undefined) {
    addSummary();
  }
}

function addExpandButton () {

  //create the expand button
  const clickableDivForExpand = document.createElement( 'div' );
  var expandHTML = "<button id='expandButton' style='margin: 0 10px; background-color: green' class='sc-186c5n9-0 gjvxlu sc-3p1kfs-8 fuhYFn'>Expand</button>";
  clickableDivForExpand.innerHTML = expandHTML;

  //add the expand button to the DOM
  var containerDiv = document.querySelector('.sc-3p1kfs-4.igPgNf');
  containerDiv.insertAdjacentElement("beforeend", clickableDivForExpand);

  //add click event
  clickableDivForExpand.addEventListener("click", (event) => {});
  clickableDivForExpand.onclick = (event) => {
    const editorContent = document.getElementsByClassName("ql-editor")[0].textContent
    if (editorContent) {
      updateEditorContent(callGPT3(editorContent));
    }
    else {
      updateEditorContent("Sorry, you didn't give me anything to expand");
    }
  };
}

function addSummary() {
  const emailBody = document.getElementsByClassName('diZLiY');
  let emailConcat = '';
  for(let i = 0; i < emailBody.length; i++) {
    emailConcat += emailBody[i].textContent;
  }
  //callGPT3("Please summarize the following email as consicsely as possible while still retaining any action items and important information I might need to know: \n\n" + emailConcat);

}

// send content to GPT-3
async function callGPT3(promptText) {

  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({model: "text-davinci-003", prompt: promptText, max_tokens: 4000, temperature: 0.9})
    });
    const data = await response.json();
    updateEditorContent(data.choices[0].text.trim());
  }
  catch (error) {
    console.error('Error:', error);
  }
}

function updateEditorContent(newContent) {
  document.getElementsByClassName("ql-editor")[0].textContent = newContent;
};

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



//Check if the DOM changed, then call onLoad() to re-add elements if it did.
let toObserve = document.body;
let observer = new MutationObserver(mCallback);

function mCallback(mutations) {
  onLoad();
}

const options = { childList: true, subtree: true };
observer.observe(toObserve, options);

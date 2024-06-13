import React, { useState } from 'react'
import './App.css';



export default function TextTools() {

  const [prev, next] = useState("your result will be displayed here");

  // always keep useState outside of invokeable function

  let data = () => {
    let ans = document.getElementById("valu").value
    let char = ans.length;
    let word = ans.split(/[\s]+/).filter((item) => { return item.length !== 0 }).length;          // for one or more spaces  //rejex
    //let lines = ans.split(/[.]+/).length ;
    // \s or as [\s] act as a space " " or new line

    let lines = ans.split(". ").length;
    let paragrahph = ans.split(/[\n]+/).length;
    let timeS = Math.round(word * 0.4);

    if (char === 0) {
      let conct = `No. of Characters are ${char} `
      document.getElementById("mal").innerHTML = conct;
      document.getElementById("colorbox").style.backgroundColor = "transparent";
      document.getElementById("colorbox").style.display = "none"

    }

    else if (lines < paragrahph) {
      let conct = `No. of Characters are ${char} , No. of Words are ${word} in ${lines} line and Average Time of Speech is ${timeS} Seconds`
      document.getElementById("mal").innerHTML = conct;
      document.getElementById("colorbox").style.display = "block"
      document.getElementById("colorbox").style.backgroundColor = "#FC2F1A"

    }

    else {
      let conct = `No. of Characters are ${char} , No. of Words are ${word} in ${lines} line in ${paragrahph} paragraph and Average Time of Speech is ${timeS} Seconds`
      document.getElementById("mal").innerHTML = conct;
      document.getElementById("colorbox").style.backgroundColor = "#FF5500"
      document.getElementById("colorbox").style.display = "block"

    }



  }

  let toLow = () => {
    let ans = document.getElementById("valu").value
    const fy = ans.toLowerCase();
    next(fy);
    document.getElementById("colorbox").style.backgroundColor = "#1AFC1D"

  }

  let toUpp = () => {
    let ans = document.getElementById("valu").value
    const fy = ans.toUpperCase();
    next(fy);
    document.getElementById("colorbox").style.backgroundColor = "#1AFC1D"

  }

  let toCap = () => {
    let ans = document.getElementById("valu").value
    const fy = ans.charAt(0).toUpperCase() + ans.slice(1);
    next(fy);
    document.getElementById("colorbox").style.backgroundColor = "#1AFC1D"

  }


  







  // to remove any duplicate element from array
  let check_repetetion = (arr) => {

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; i < arr.length; i++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1)
        }
      }
    }
  }

  let implement_element = (arr) => {
    let insight_ele = document.getElementById("insights");
    let str = ""
    arr.forEach((ele, indx) => {
      str += `<span class="insights" key="${indx}">${ele}</span>`
    })
    insight_ele.innerHTML = str

  }

  let show = () => {
    
    document.getElementById("show").style.display = "none";
    document.getElementById("hide").style.display = "block";
    document.getElementById("mal").style.display = "block";
    document.getElementById("colorbox").style.display = "block";
    document.getElementById("colorbox").style.backgroundColor = "#0093FF"


    const common_word_array = [
      "the", "be", "to", "of", "and", "a", "in", "that", "have", "I",
      "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
      "this", "but", "his", "by", "from", "they", "we", "say", "her",
      "she", "or", "an", "will", "my", "one", "all", "would", "there",
      "their", "what", "so", "up", "out", "if", "about", "who", "get",
      "which", "go", "me", "when", "make", "can", "like", "time", "no",
      "just", "him", "know", "take", "people", "into", "year", "your",
      "good", "some", "could", "them", "see", "other", "than", "then",
      "now", "look", "only", "come", "its", "over", "think", "also",
      "back", "after", "use", "two", "how", "our", "work", "first",
      "well", "way", "even", "new", "want", "because", "any", "these",
      "give", "day", "most", "us", "better", "excluded", "uniqueness",
      "important", "effective", "additional", "consider", "significant",
      "necessary", "development", "specific", "different", "related",
      "various", "primary", "essential", "improve", "analysis", "approach",
      "potential", "impact", "context", "method", "increase", "focus",
      "structure", "process", "evaluate", "understand", "relevant",
      "complex", "system", "benefit", "create", "result", "experience",
      "strategy", "contribute", "challenge", "objective", "perspective",
      "determine", "achieve", "recommend", "effort", "utilize", "identify",
      "maintain", "principle", "adapt", "solution", "implement", "practice",
      "support", "require", "recognize", "demonstrate", "conclusion",
      "enhance", "opportunity", "consistency", "establish", "performance",
      "ensure", "efficiency", "interaction", "flexibility", "sustainable",
      "innovation", "alternative", "initiative", "optimize", "collaborate",
      "priority", "insight", "is", "was", "are", "so", "more", "has", "do",
      "many", "such", "any", "other", "most", "up", "out", "there", "over",
      "then", "now", "just", "like", "also", "very", "even", "see", "than",
      "who", "may", "what", "how", "where", "when", "each", "much",
      "through", "while", "those", "both", "should", "having", "our",
      "him", "her", "they", "them", "its", "might", "must", "does",
      "did", "his", "nor", "she", "he", "me", "mine", "hers", "ours",
      "your", "yours", "theirs", "it's", "I'm", "you're", "we're",
      "they're", "can't", "won't", "don't", "doesn't", "didn't",
      "isn't", "aren't", "wasn't", "weren't", "hasn't", "haven't",
      "hadn't", "couldn't", "wouldn't", "shouldn't", "I'll", "you'll",
      "he'll", "she'll", "we'll", "they'll", "I'd", "you'd", "he'd",
      "she'd", "we'd", "they'd", "actually", "again", "almost", "already",
      "although", "always", "among", "another", "anyway", "around",
      "because", "before", "behind", "besides", "between", "beyond",
      "both", "certainly", "clearly", "definitely", "especially", "even",
      "finally", "frequently", "however", "instead", "literally", "mainly",
      "meanwhile", "merely", "mostly", "naturally", "nearly", "necessarily",
      "nevertheless", "obviously", "particularly", "perhaps", "possibly",
      "probably", "quickly", "rather", "really", "simply", "sometimes",
      "specifically", "still", "strongly", "suddenly", "surely", "therefore",
      "though", "throughout", "together", "totally", "truly", "ultimately",
      "usually", "virtually"
  ]
  




    let ans = document.getElementById("valu").value
    let ans_array = ans.split(" ")

    // remove comas & dots


    for (let i = 1; i < common_word_array.length; i++) {
      for (let j = 1; j < ans_array.length; j++) {
        if (common_word_array[i - 1] === ans_array[j - 1]) {

          // keywords.push(ans_array.splice(j-1, 1)); // return array of arrays of element

          ans_array.splice(j - 1, 1) // simply removes the common element
        }
      }
    }

    check_repetetion(ans_array) // eleminates repetetion
    // console.log(ans_array)
    implement_element(ans_array)
    if (document.getElementById("insights").innerHTML !== "") {
      document.getElementById("insights").style.display = "flex"
    }
  }


  let hide = () => {

    document.getElementById("insights").style.display = "none"
    document.getElementById("show").style.display = "block";
    document.getElementById("hide").style.display = "none";
    document.getElementById("mal").style.display = "none";
    document.getElementById("colorbox").style.display = "block";
    document.getElementById("colorbox").style.backgroundColor = "rgb(255, 133, 57)";


  }

  let toArg = () => {
    let ans = document.getElementById("valu").value

    let splitedPrh = ans.split(/[\n]+/);
    let argPrh = splitedPrh.join("\n");
    let splitedDot = argPrh.split(/[.]+/);
    let argDot = splitedDot.join(". ");
    let splitedCom = argDot.split(/[,]+/);
    let argCom = splitedCom.join(", ");
    let splitedWrd = argCom.split(/[ ]+/);
    let argSpc = splitedWrd.join(" ");
    next(argSpc)
    document.getElementById("colorbox").style.backgroundColor = "#1AFC1D"
  }

  let toCpy = () => {
    navigator.clipboard.writeText(prev)
    document.getElementById("colorbox").style.backgroundColor = "#AF5FFF"
  }

  let toClr = () => {
    document.getElementById("valu").value = null;
    document.getElementById("mal").innerHTML = "Text Parameters"

    next("your result will be displayed here")
    document.getElementById("colorbox").style.backgroundColor = "transparent"

    hide()

  }
  // text area takes no value from hook

  return (
    <>
      <div className="TextTools">
        <div id="colorbox"></div>
        <div id="mal" >Text Parameters</div>



        <div id="reload-texttools" className='convert-box'>
          <textarea onChange={data} id="valu" placeholder="we've created a tool that empowers you to
          create, edit, Get you insights and refine your texts effortlessly" ></textarea>
          <div className='result-box'>
            <div id='insights'>

            </div>

            <div className='bkl-block'>{prev}</div></div>
        </div>


        <div className='convert-controls'>
          <button className='btn' onClick={toLow}>LowerCase</button>
          <button className='btn' onClick={toUpp}>UpperCase</button>
          <button className='btn' onClick={toCap}>Capitalize</button>
          <button className='btn' onClick={toClr}>Clear all</button>
          <button className='btn' onClick={toCpy}>Copy all</button>
          <button className='btn' onClick={toArg}>Del Extra</button>


          <button id="show" onClick={show} className='btn' >Show props</button>
          <button id="hide" onClick={hide} className='btn' >Hide props</button>

        </div>
      </div>
    </>
  )


}

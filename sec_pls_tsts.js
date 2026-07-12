import cryptPki from './qstn_lsts/crpt_pki.js'
import genSecConcepts from './qstn_lsts/gen_sec_concpts.js'
import govRskComp from './qstn_lsts/gov_rsk_comp.js'
import riskMngment from './qstn_lsts/risk_mngment.js'
import secArchtcr from './qstn_lsts/sec_archtcr.js'
import secOps from './qstn_lsts/sec_operations.js'
import secSftwrDev from './qstn_lsts/sec_sftwr_dev.js'
import thrtsVulnsMits from './qstn_lsts/thrts_vulns_mits.js'

// converts all the imorted arrays into readable json ojects
const rawData2 = cryptPki
const cryptPkiList = JSON.parse(rawData2)

const rawData1 = genSecConcepts
const genSecConceptsList = JSON.parse(rawData1)

const rawData3 = govRskComp
const govRskCompList = JSON.parse(rawData3)

const rawData4 = riskMngment
const riskMngmentList = JSON.parse(rawData4)

const rawData5 = secArchtcr
const secArchtcrList = JSON.parse(rawData5)

const rawData6 = secOps
const seckOpsList = JSON.parse(rawData6)

const rawData7 = secSftwrDev
const secSftwrDevList = JSON.parse(rawData7)

const rawData8 = thrtsVulnsMits
const thrtsVulnsMitsList = JSON.parse(rawData8)


// functionality for modal
window.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('introModal')
    const closeBttn = document.getElementById('x')
    // show modal when page is loaded
    modal.style.display = 'flex'

    // close the modal when clicking the button
    closeBttn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
})

// global variable to maintain overall score during session
let totalAttempts = 0
let correctAttempts = 0
let finalPercent
let topicAttempts = 0
let correctTopicAttempts = 0
let selectionForDetails = ''

// updates the score details when a new topic is selected
function updateScoreDetails() {
    let placeHolder = document.getElementById('initialHolder')
    let detailsHolder = document.getElementById('scoreDetailsHolder')
    let newDetail = document.createElement('p')
    newDetail.className = 'scoreDetails'

    // calculates percentage for specific topics
    let decimal = correctTopicAttempts / topicAttempts
    let percentFormat = new Intl.NumberFormat('en-US', {
        style: 'percent',
        maximumFractionDigits: 1
    })
    let finalPercent = percentFormat.format(decimal)
    
    if (placeHolder && placeHolder.isConnected) {
        placeHolder.remove()
        placeHolder = null
    } else {
        let detailText = `${selectionForDetails}\n${correctTopicAttempts}/${topicAttempts}   |   ${finalPercent}`
        newDetail.textContent = detailText
        detailsHolder.append(newDetail)

        topicAttempts = 0
        correctTopicAttempts = 0
    }
}


// grabs the the specific topic clicked on
let slctdTopic = document.querySelector('#topics')
slctdTopic.onclick = (event) => {
    if (event.target.matches('h2.topic')) {
        let currntTopic = document.getElementById('currentTopicHolder')
        let crrntTopicTxt = document.createElement('p')
        crrntTopicTxt.id = 'currentTopic'
        let selection = event.target.textContent
        crrntTopicTxt.textContent = selection
        currntTopic.replaceChildren(crrntTopicTxt)
        updateScoreDetails()
        topicSelection(selection)
    }
}


// determines which list to use by the selection
function topicSelection(selection) {
    let testTopic

    if (selection === 'General Security Concepts') {
        testTopic = genSecConceptsList
    } else if (selection === 'Threats, Vulnerabilities & Mitigations') {
        testTopic = thrtsVulnsMitsList
    } else if (selection === 'Security Architecture') {
        testTopic = secArchtcrList
    } else if (selection === 'Security Operations') {
        testTopic = seckOpsList
    } else if (selection === 'Risk Management') {
        testTopic = riskMngmentList
    } else if (selection === 'Cryptography & PKI') {
        testTopic = cryptPkiList
    } else if (selection === 'Governance, Risk & Compliance') {
        testTopic = govRskCompList
    } else if (selection === 'Secure Software Development') {
        testTopic = secSftwrDevList
    }

    displayTest(testTopic, selection)
}

// allows the for loop to continue in displayTest
// when next card is clicked
function nextQuestion() {
    return new Promise((resolve) => {
        let nextQuestion = document.getElementById('nextQuestion')
        nextQuestion.onclick = () => {
            resolve()
        }
    })
}

function answerVerification(userAnswer, answerData){
    let card = document.getElementById('questionCard')
    // prepares the explanation text for appending
    let explText = document.createElement('h3')
    explText.id = 'explanation'
    explText.textContent = `Explained: ${answerData[1]}`

    // prepares the 'correct' text for appending
    let crctTxt = document.createElement('h3')
    crctTxt.id = 'crctTxt'
    crctTxt.textContent = 'CORRECT'

    // prepares the 'incorrect' text for appending
    let incrctTxt = document.createElement('h3')
    incrctTxt.id = 'incrctTxt'
    incrctTxt.textContent = 'INCORRECT'
    
    // displays a check next to the correct answer
    let correctAnswer = document.getElementById(answerData[0])
    let check = ' \u2714'
    correctAnswer.style.color = '#00ffc3'
    correctAnswer.style.textShadow = '1px 2px 2px #000000'
    correctAnswer.append(check)

    // options list for marking incorrect answers
    let optsList = answerData[2]
    let crctIndex = optsList.indexOf(answerData[0])

    // compares user answer against correct answer
    // styles approprietly, adds explanation to test card
    if(userAnswer === answerData[0]){
        optsList.splice(crctIndex, 1)
        correctAttempts++
        correctTopicAttempts++
        calculateScore()
        for (let ia of optsList) {
            let insert = document.getElementById(ia)
            insert.style.textDecoration = 'line-through'
            insert.style.color = '#0000007e'
        }
        card.appendChild(crctTxt)
        card.appendChild(explText)
    } else {
        calculateScore()
        optsList.splice(crctIndex, 1)
        for (let ia of optsList) {
            let insert = document.getElementById(ia)
            if (ia === userAnswer){
                insert.style.textDecoration = 'line-through'
                insert.append(' \u2718')
            } else {
                insert.style.textDecoration = 'line-through'
                insert.style.color = '#0000007e'
            }
        }
        card.appendChild(incrctTxt)
        card.appendChild(explText)
    }
}

function retreiveUserAnswer(answerData) {
    let userAnswer = document.querySelector('#optionsHolder')
    let chckAnswer = document.getElementById('checkAnswer')
    userAnswer.onclick = (event) => {
        if (event.target.matches('h3.singleOption')) {
            chckAnswer.style.color = 'white'
            // finds the previously clicked option if there is one (incase user changes their answer)
            const currentActive = userAnswer.querySelector('.activeSelection')

            // if there is an previous selection the style is removed
            if (currentActive) {
                currentActive.classList.remove('activeSelection')
            }

            // sets styling on the currently selected answer
            event.target.classList.add('activeSelection')
        
            // sets answer to send to the asnwerVerification function
            let uAnswer = event.target.textContent
            chckAnswer.onclick = () => {
                totalAttempts++
                topicAttempts++
                chckAnswer.style.color = 'gray'
                chckAnswer.onclick = null
                answerVerification(uAnswer, answerData)
                uAnswer = ''
            }
        }
    }
}


function displayMultipleChoice(options) {
    let qCard = document.getElementById('questionCard')
    let mcOptions = document.createElement('div')
    mcOptions.id = 'optionsHolder'

    for (let o of options) {
        let singleOption = document.createElement('h3')
        singleOption.className = 'singleOption'
        singleOption.id = o
        singleOption.textContent = o
        mcOptions.appendChild(singleOption)
    }
    qCard.appendChild(mcOptions)
}

// Fisher-Yates shuffle algorithm found on google
function shuffle(options) {
    for (let i = options.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options
}

// lets the user see what question they are on e.g. 5/100
function updateProgress(currentQuestionNum, totalQuestions) {
    
    let nxtbttn = document.getElementById('nextQuestion')
    let tstPrgrss = document.createElement('p')
    tstPrgrss.id = 'testProgress'
    tstPrgrss.textContent = `${currentQuestionNum} / ${totalQuestions}`
    try {
        let prevUpdate = document.getElementById('testProgress')
        prevUpdate.replaceWith(tstPrgrss)
    } catch {
        nxtbttn.before(tstPrgrss)
    }
}

// calculates overall score and displays it
function calculateScore() {
    let score = document.getElementById('overallScore')
    let percentHolder = document.getElementById('overallPercentage')
    score.textContent = `${correctAttempts} / ${totalAttempts}`
    let decimal = correctAttempts / totalAttempts
    let percentFormat = new Intl.NumberFormat('en-US', {
        style: 'percent',
        maximumFractionDigits: 1
    })
    finalPercent = percentFormat.format(decimal)

    percentHolder.textContent = finalPercent
}

// starts selected test
async function displayTest(testTopic, selection) {
    
    let questionCard = document.getElementById('questionCard')
    let cardOptions = document.getElementById('cardOptions')
    let chckAnswer = document.getElementById('checkAnswer')
    let topicTitle = document.getElementById('currentTopicHolder')

    let question = document.createElement('h3')
    question.id = 'question'
    let answer = document.createElement('h3')
    answer.id = 'answer'
    let explanation = document.createElement('h3')
    explanation.id = 'explanation'

    let totalQuestions = testTopic.length
    let currentQuestionNum = 0
    selectionForDetails = selection
    for (let q of testTopic) {
        currentQuestionNum++
        updateProgress(currentQuestionNum, totalQuestions)
        let options = q['options']
        let shffldOptions = shuffle(options)
        questionCard.replaceChildren()
        questionCard.style.visibility = 'visible'
        cardOptions.style.visibility = 'visible'
        question.textContent = `Q: ${q['question']}`
        questionCard.appendChild(question)
        displayMultipleChoice(shffldOptions, q['answer'])
        retreiveUserAnswer([q['answer'], q['explanation'], shffldOptions])
        
        await nextQuestion()
    }
    questionCard.style.visibility = 'hidden'
    cardOptions.style.visibility = 'hidden'
    topicTitle.style.visibility = 'hidden'
}

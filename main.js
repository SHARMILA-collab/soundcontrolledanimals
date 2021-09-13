function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DC-c-e7aP/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}
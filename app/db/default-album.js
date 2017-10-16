const originalWords = [
"be","beat","become","begin","bend","bet","bite","blow","break","bring","build",
"buy","catch","choose","come","cost","cut","deal","dig","do","draw","drink",
"drive","eat","fall","feed","feel","fight","find","fly","forget","forgive",
"freeze","get","give","go","grow","hang","have","hear","hide","hit","hold",
"hurt","keep","know","lay","lead","leave","lend","let","lie","light","lose",
"make","mean","meet","pay","put","read","ride","ring","rise","run","say","see",
"seek","sell","send","set","shake","shine","shoot","show","shut","sing","sink",
"sit","sleep","speak","spend","stand","steal","stick","strike","swear","sweep",
"swim","swing","take","teach","tear","tell","think","throw","understand","wake",
"wear","win","write"
];

const translateWords = [
"быть, являться","бить, колотить","становиться","начинать","гнуть",
"держать пари","кусать","дуть, выдыхать","ломать, разбивать, разрушать",
"приносить, привозить, доставлять","строить, сооружать","покупать, приобретать",
"ловить, поймать, схватить","выбирать, избирать","приходить, подходить",
"стоить, обходиться","резать, разрезать","иметь дело, распределять",
"копать, рыть","делать, выполнять","рисовать, чертить","пить",
"ездить, подвозить","есть, поглощать, поедать","падать","кормить",
"чувствовать, ощущать","драться, сражаться, воевать","находить, обнаруживать",
"летать","забывать о (чём-либо)","прощать","замерзать, замирать",
"получать, добираться","дать, подать, дарить","идти, двигаться",
"расти, вырастать","вешать, развешивать, висеть","иметь, обладать",
"слышать, услышать","прятать, скрывать","ударять, поражать",
"держать, удерживать, задерживать","ранить, причинять боль, ушибить",
"хранить, сохранять, поддерживать","знать, иметь представление",
"класть, положить, покрывать","вести за собой, сопровождать, руководить",
"покидать, уходить, уезжать, оставлять","одалживать, давать взаймы (в долг)",
"позволять, разрешать","лежать","зажигать, светиться, освещать",
"терять, лишаться, утрачивать","делать, создавать, изготавливать",
"значить, иметь в виду, подразумевать","встречать, знакомиться",
"платить, оплачивать, рассчитываться","ставить, помещать, класть",
"читать, прочитать","ехать верхом, кататься","звенеть, звонить",
"восходить, вставать, подниматься","бежать, бегать",
"говорить, сказать, произносить","видеть","искать, разыскивать",
"продавать, торговать","посылать, отправлять, отсылать",
"устанавливать, задавать, назначать","трясти, встряхивать",
"светить, сиять, озарять","стрелять","показывать",
"закрывать, запирать, затворять","петь, напевать",
"тонуть, погружаться","сидеть, садиться","спать",
"говорить, разговаривать, высказываться",
"тратить, расходовать, проводить (время)","стоять","воровать, красть",
"втыкать, приклеивать","ударять, бить, поражать","клясться, присягать",
"мести, подметать, смахивать","плавать, плыть","качаться, вертеться",
"брать, хватать, взять","учить, обучать","рвать, отрывать","рассказывать",
"думать, мыслить, размышлять","бросать, кидать, метать","понимать, постигать",
"просыпаться, будить","носить (одежду)","победить, выиграть",
"писать, записывать"
];

export default originalWords.map((originalWord, index) => {
  const translateWord = translateWords[index];
  return { originalWord, translateWord };
});

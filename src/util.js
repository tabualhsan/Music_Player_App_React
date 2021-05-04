import { v4 as uuidv4 } from "uuid";

function chillHop(){

    return[

        { 
            name: "By Chance",
            artist: "SwuM",
            cover : "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
            audio:'https://mp3.chillhop.com/serve.php/?mp3=15223',
            color: ["#4C3E27", "#8D5329"],
            id:uuidv4(),
            active:true,

        },


        {
            name: "Roses n Flames",
            artist:"C Y G N",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=14984",
            color: ["#DB7DDC" , "#0D122F "],
            id:uuidv4(),
            active:false,
        },
    ]
}
   


export default chillHop;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './cultures.css'
import ImageGallery from "react-image-gallery";

const images = [
    {
        original: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
        thumbnail: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
    },
    {
        original: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
        thumbnail: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
    },
    {
        original: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
        thumbnail: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
    },
    {
        original: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
        thumbnail: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
    },
    {
        original: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
        thumbnail: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
    },
    {
        original: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
        thumbnail: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
    },
    {
        original: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
        thumbnail: "https://raw.githubusercontent.com/isitusnoamow/CultureTrain-Images/main/sidetrain.png",
    },
]


function China(){

    const [slide, setSlide] = useState(0);

    function slideChange(index) {
        console.log(index);
        setSlide(index);
    }

    function hideTransition(){
        console.log('clicked');
        setSlide(20);
    }

    return(
        <div className="main">
            <h1 className="title">Culture Of China</h1>
            <div className="area">
                {(() => {
                    switch(slide) {

                        case 0:
                            return(
                            <>
                                <h1 className="subtitle">Ethnicity</h1>
                                <p className="description-eth">China, with the world's largest population, is made up of ethnic and linguistic groups from all over the world. The Han are China's largest ethnic group, whereas the Zhuang are its largest minority. Many ethnic groups, including Buyi, Miao, Dong, Tibetans, Mongolians, and others, are geographically intermixed in some parts of China, particularly in the southwest.</p>
                            </>
                            )
                        case 1: 
                            return( 
                            <>
                                <h1 className="subtitle">Food</h1>
                                <p className="description-food">Food can  be used to understand Chinese culture. Like Chinese philosophy, Chinese food is based on Daoist concepts of opposition and change: hot is balanced by cold, spicy by mild, and fresh by aged. Cantonese cuisine, in particular, is a symphony of subtle flavors derived from freshly harvested veggies and softly cooked meats. Foods of all kinds are seen as a complement to grains, the staple of the Chinese diet, regardless of geography. 
</p>
                                <div class="foodflex"><img style={{height:"110px", borderRadius:"16px"}} src="https://foodnerdy.com/blog/wp-content/uploads/2021/05/Chinese-Cuisine-1024x683.jpg"></img> </div>
                            </>
                            )
                        case 2:
                            return(
                                <>
                                    <h1 className="subtitle">Art</h1>
                                    <p className="description-art">Chinese art includes Chinese Painting, Chinese calligraphy, architecture, pottery, sculpture, bronzes, jade carving, and other fine or decorative art forms produced in China over the centuries. One of the most striking features of Chinese art is how well it reflects the many class structures that have existed throughout Chinese history. For example, during the Shang and early Zhou periods, it is thought that the manufacturing of ceremonial bronzes was solely regulated by the court, which may give or deny authorisation to regional workshops. 
</p>
                                    <img src="https://www.inkdancechinesepaintings.com/mountains/picture/1016028.jpg" style={{height:"130px"}}></img>
                                    
                                </>
                            )
                        case 3:
                            return(
                                <>
                                    <h1 className="subtitle">Music</h1>
                                    <p className="description-art">Chinese music is one of the oldest and most highly developed of all known musical systems. According to Chinese texts, Emperor Huangdi sent a scholar, Ling Lun, to the western mountain area in 2697 BCE to cut bamboo pipes that could make noises similar to the call of the fenghuang, an immortal bird whose rare arrival indicated harmony in a new emperor's reign. Huangdi made music that was properly pitched to harmonize his rulership with the cosmos feasible by emulating the sound of the bird. 
</p>
<iframe width="231" height="130" src="https://www.youtube.com/embed/GwyXQO0tSW4" title="Relaxing With Chinese Bamboo Flute, Guzheng, Erhu | Instrumental Music Collection" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    
                                </>
                            )
                        
                            case 4:
                                return(
                                    <>
                                        <h1 className="subtitle">Culture</h1>
                                        <p className="description-culture">China is one of the world's great cradles of civilization, and Chinese culture is notable for its longevity, complexity, and effect on other cultures, particularly those in East Asia. The following is a summary of Chinese culture; in-depth examinations of individual cultural components can be found in the articles Chinese literature and arts, East Asian, in the sections on Chinese visual arts, music, dance, and theatre. Chinese art and artifacts have been collected in museums all around the world.
</p>                                   
                                    </>
                                )
                        
                            case 5:
                                return(
                                    <>
                                        <h1 className="subtitle">Entertainment</h1>
                                        <p className="description-ent">Chinese chess featured two colors: red and black, and was played on a board that was nine lines wide and ten lines long. Traditional Chinese opera (戏曲, xìqǔ) was a combination of dancing, singing, and acting, and was a kind of amusement for both men and women, the young and the old, the rich and the destitute in ancient China. The Beijing Opera, Yueju, Huangmei Opera, Pingju, and Yu Opera were among the five branches of traditional Chinese opera.
</p>
                                        <div><iframe src="https://cdn.htmlgames.com/Xiangqi/index.html?npa=[npa]" height="300" scrolling="no" frameborder="0" className="xiangqi"></iframe><img src="https://news.cgtn.com/news/7867444e32456a4e3345544d7751544d77456a4e31457a6333566d54/img/7d3186890c2543a38731cd0d348441ac/7d3186890c2543a38731cd0d348441ac.jpg" height="130" style={{borderRadius:"16px"}}></img></div>                                       
                                    </>
                                )
                            
                            case 6:
                                return(
                                    <>
                                        <h1 className="subtitle">Landmarks</h1>
                                        <div className="pictures"><img height="200" src="https://static.toiimg.com/photo/68065207/forbidden-city.jpg?width=748&resize=4"></img><img src="https://4.bp.blogspot.com/-6WJbhoas2TA/W-1eTNoy4nI/AAAAAAAASpA/qru736IZ0e4F6TKXwFd2vR3rVOqEKT4wQCLcBGAs/s1600/09016a892489cfbac3d3c5e17ae85a83_fitted_800x3000.jpg" height="200"></img><img src="https://curiouscatontherun.files.wordpress.com/2013/09/wall-18.jpg
" height="200"></img></div>
                                        <h1 style={{fontSize:"30px"}}>The Forbidden City, The Teracotta Army, The Great Wall of China</h1>
                                    </>
                                )
                        
                        case 20:
                            return <></>







                    }
                })()}
            </div>
            <ImageGallery 
            items={images}
            infinite={false}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            onSlide={slideChange}
            onBeforeSlide={hideTransition}
            >
            
            </ImageGallery>
            <Link to="/"><button className="backa">Back </button></Link>
        </div>
    )
}

export default China;
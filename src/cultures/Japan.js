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


function Japan(){

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
            <h1 className="title">Culture Of Japan</h1>
            <div className="area">
                {(() => {
                    switch(slide) {

                        case 0:
                            return(
                            <>
                                <h1 className="subtitle">Ethnicity</h1>
                                <p className="description-eth-jp">The Japanese people make up the vast majority of the country's population. They are ethnically similar to the other eastern Asian peoples. During the Edo (Tokugawa) period (1603–1867), the people were divided into four classes: warriors, farmers, craftsmen, and merchants, with a peer class above them and an outcast class below them. This social class system has practically vanished, with the exception of the burakumin (literally, "people of the hamlet"), descendants of the old outcast class. 
</p>
                            </>
                            )
                        case 1: 
                            return( 
                            <>
                                <h1 className="subtitle">Food</h1>
                                <p className="description-food-jp">Japanese cuisine refers to the country's regional and traditional meals, which have evolved over centuries of political, economic, and social upheaval. Japanese cuisine has been influenced by Chinese cuisine in the past, as well as Western cuisines recently. Foods like ramen and gyoza, as well as spaghetti, curries, and hamburgers, have been adapted to Japanese tastes and ingredients after being inspired by foreign cuisines, particularly Chinese cuisine. Since the 1880s, Japanese cuisine, notably sushi and ramen, has grown in popularity around the world.
</p>
                                <div class="foodflex"><img style={{height:"110px", borderRadius:"16px"}} src="https://i.pinimg.com/originals/bd/d1/d7/bdd1d76183a804eaf3b78ae74ebd3e38.jpg"></img> </div>
                            </>
                            )
                        case 2:
                            return(
                                <>
                                    <h1 className="subtitle">Art</h1>
                                    <p className="description-art-jp">Painting, calligraphy, architecture, ceramics, sculpture, bronzes, jade carving, and other fine or decorative visual arts produced in Japan throughout the centuries are referred to as Japanese art. In considering the history of Japanese visual expression, the advent of Buddhism and its associated iconography in Japan in the mid-6th century ce serves as a stark dividing line. With the arrival of Buddhism, a large range of already developed iconography and creative style was quickly incorporated. The development of Japanese art was set in motion at this point.
</p>
                                    <img src="http://artdiscovery.info/wp-content/uploads/2013/07/3-IMG_3478.jpg" style={{height:"130px"}}></img>
                                    
                                </>
                            )
                        case 3:
                            return(
                                <>
                                    <h1 className="subtitle">Music</h1>
                                    <p className="description-art">Japanese music is the art of blending vocal or instrumental sounds for the purpose of beauty of form or emotional expression, as practiced in Japan. Korea acted as a conduit for numerous Chinese musical ideas to reach Japan, as well as exerting influence through its own court music. The presence of northern Asian tribal traditions in the form of Ainu culture on Hokkaido island should also be acknowledged. Japan's island isolation allowed it to establish its own distinct traits.</p>
<iframe width="231" height="130" src="https://www.youtube.com/embed/Q0yv8deqHg4" title="Traditional Japanese  music - shamisen 三味線" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    
                                </>
                            )
                        
                            case 4:
                                return(
                                    <>
                                        <h1 className="subtitle">Culture</h1>
                                        <p className="description-culture">Culture shifted as a result of modernization. Rationalism and Christian socialism, as well as Marxism, became inextricably linked to everyday life in Japan. In many social settings, Western or Westernized music is more common than traditional Japanese music. Christmas (or the outer trappings of it) is widely commemorated, almost as a folk event, in Japan, despite the fact that Christians make up a small percentage of the population. 
</p>                                   
                                    </>
                                )
                        
                            case 5:
                                return(
                                    <>
                                        <h1 className="subtitle">Entertainment</h1>
                                        <p className="description-ent-jp">Japan is one of the world's most renowned performing arts nations. In venues all around Japan, you may see a range of technically challenging dance acts. The Noh theatre, or dance play, the Kabuki, and the Bunraku are the most important of these. Dances have functioned as a conduit between humans and the gods in Japan since prehistoric times. Continue reading to learn more about some of Japan's traditional performances.
</p>
                                        <div><img src="https://cdn-japantimes.com/wp-content/uploads/2014/07/cg-stagevenue-20140701-National-Noh-Theatre.jpg" height="130" style={{borderRadius:"16px"}}></img></div>                                       
                                    </>
                                )
                            
                            case 6:
                                return(
                                    <>
                                        <h1 className="subtitle">Landmarks</h1>
                                        <div className="pictures"><img height="200" src="http://whatchareading.com/wp-content/uploads/2013/07/tokyo_tower_20060211.jpg"></img><img src="https://www.learnreligions.com/thmb/6dOo153wn3yhR-kucveHvTV68-U=/3000x2001/filters:fill(auto,1)/itsukushima-shrine---hiroshima-98109157-6ea98636a1d749ba9b2e7844d1933674.jpg" height="200"></img><img src="https://live.staticflickr.com/5449/30793314400_7c956fc829_b.jpg
" height="200"></img></div>
                                        <h1 style={{fontSize:"30px"}}>Tokyo Tower, Shinto Shrines, Buddhist Temples</h1>
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
            <Link to="/"><button className='backa'>Back </button></Link>
        </div>
    )
}

export default Japan;
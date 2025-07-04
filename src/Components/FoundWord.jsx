import HorizonStick from "../images/horizontal-stick.svg";
import PlayButton from "../images/play-button.svg";
import ExternaLink from "../images/external-link.svg";
import Sad from "../images/sad.svg";


const MeaningList = ({ meanings }) => (
    <ul>
        {meanings.map((meaning, index) => (
            <li key={index}>
                {meaning.definition && <p>{meaning.definition}</p>}
                {meaning.example && <p className="keyB">{`"${meaning.example}"`}</p>}
            </li>
        ))}
    </ul>
);
const FetchDatas = ({ fetchWord }) => (
    <div className="wordfound-section">
                    {fetchWord && 
                    <>
                        <span className="found-sec">
                            <h3>{fetchWord.word}</h3>
                            <h2>{fetchWord.phonetic}</h2>
                        </span>
                        {
                            fetchWord.phonetics.map((x, index) => {
                                return (
                                    <div key={index} className="phonetics">
                                        {x.audio &&
                                            <>
                                                <div className="found-sound">   
                                                    <img onClick={() => {
                                                    const audio = new Audio(x.audio)
                                                    audio.play() }} 
                                                    src={PlayButton} alt="play-nouns" />
                                                </div>
                                            </>
                                        }
                                    </div>
                                )
                            })
                        }
                    </>}
        </div>
) 
const SynonymsList = ({synonyms, setSearchTerm}) => (
    <div className="synonyms">
        <p>Synonyms</p>
        <span>
            {synonyms.map((synonym, index) => (
                <p className='synonymsP' onClick={() => setSearchTerm(synonym)} key={index}>{synonym}</p>
            ))}
        </span>
    </div>
)
const SourceInfo = ({ sourceUrls }) => (
    <div className="source">
            <span className="stick">
                <img src={HorizonStick}/>
            </span>
            <span className="source-bot">
                <h5>Source</h5>
                <span className="source-url" onClick={() => window.open(sourceUrls, '_blank')}>
                    {sourceUrls}
                    <img src={ExternaLink} alt="{sourceUrls}" />
                </span>
            </span>
    </div>
);

const WordType = ({ type, meanings, synonyms, setSearchTerm, sourceUrls }) => (
    <div className={type.toLowerCase()}>
        <span className="text-vertical">
            <h3>{type}</h3>
            <img src={HorizonStick} alt="" />
        </span>
       <span className="meanings">
            <p className="desc">Meaning</p>
            <MeaningList meanings={meanings} />
            {type === 'Noun' && <SynonymsList synonyms={synonyms} setSearchTerm={setSearchTerm} />}
            {type === 'Verb' && sourceUrls && <SourceInfo sourceUrls={sourceUrls} />}
       </span>
    </div>
)


export default function FoundWord({ fetchWord, setSearchTerm }) {
    console.log(fetchWord)
    return (
      <>
        {fetchWord && (
          
          <>
            {
              <FetchDatas fetchWord={fetchWord}/>               
            }
            {fetchWord.meanings && fetchWord.meanings[0] && (
              <WordType
                type="Noun"
                meanings={fetchWord.meanings[0].definitions}
                synonyms={fetchWord.meanings[0].synonyms}
                setSearchTerm={setSearchTerm}
              />
            )}
            {fetchWord.meanings && fetchWord.meanings[1] && (
              <WordType
                type="Verb"
                meanings={fetchWord.meanings[1].definitions}
                sourceUrls={fetchWord.sourceUrls[0]}
              />
            )}
          </>
        )}
        
        {!fetchWord &&  (
            <>
                <div className="error-container">
                    <span>
                        <img src={Sad} alt="😕" />
                    </span>
                    <span className="error-text">
                        <h4>No Definitions Found</h4>
                        <h5>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</h5>
                    </span>

                </div>
            </>
        )}
        {//searchbar boş olup olmadığı kontrol edilecek

        }
      </>

    );
  }

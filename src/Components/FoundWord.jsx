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
                        <h2>{fetchWord.word}</h2>
                        {
                            fetchWord.phonetics.map((x, index) => {
                                return (
                                    <div key={index} className="phonetics">
                                        {x.audio &&
                                            <>
                                                <div className="found-sound">
                                                    <p>{x.text}</p>
                                                    <img onClick={() => {
                                                        const audio = new Audio(x.audio)
                                                        audio.play() }} 
                                                        src="/images/play-button.svg" alt="play-nouns" />
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
            <p className='synonymsP' onClick={() => setSearchTerm(synonym)} key={index}>
            {synonym}
            </p>
            ))}
        </span>
    </div>
)
const SourceInfo = ({ sourceUrls }) => (
    <div className="source">
        {sourceUrls}
    </div>
);

const WordType = ({ type, meanings, synonyms, setSearchTerm, sourceUrls }) => (
    <div className={type.toLowerCase()}>
        <h3>{type}</h3>
        <p>Meaning</p>
        <MeaningList meanings={meanings} />
        {type === 'Noun' && <SynonymsList synonyms={synonyms} setSearchTerm={setSearchTerm} />}
        {type === 'Verb' && sourceUrls && <SourceInfo sourceUrls={sourceUrls} />}
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
        
        {!fetchWord &&  (// !fetchword kontrol edilecek ve searchbar value boş olmamalı bu kontrol edilecek
            <>
                
            </>
        )}
        {//searchbar boş olup olmadığı kontrol edilecek

        }
      </>

    );
  }

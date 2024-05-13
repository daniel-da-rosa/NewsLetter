/* eslint-disable react/prop-types */

const Article =({title, text,tags,image,alt})=>{
    return(

        <div className="card-noticia">
            <h3 className=" text-xl text-proje-200 dark:text-gray-200 font-bold">{title}</h3>
            <div className="w-full sm:flex-row justify-end gap-2 pr-5 hidden sm:flex ">
                {
                    tags.map(tag => <span key={tag} className="tag-noticia">{ tag }</span>)
                }
            </div>
            <div className="grid gap-1">
                {
                    text.map((content,index) => <p key={index} className="text-proje-100
                                                                          dark:text-gray-400"> {content} </p>)
                }
            </div>
            { alt && <p className="sr-only">{ alt }</p>}
            {image && <img src={image}/>}

        </div>

    )
}
export default Article
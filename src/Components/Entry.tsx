export default function Entry(props) {
    return (
        <button className={props.class + " cursor-pointer"}>
            <h1 className="absolute top-[0px] ml-3 mt-4 text-2xl">{props.title}</h1>
            <p className="absolute top-[3.5em] ml-3 w-[70%]">{props.text}</p>
            <hr className="absolute bottom-[0px] left-[5%] w-[90%]"/>
        </button>
    )
}

//
import {useRef} from "react";


export const Input = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="영양제 검색"/>
        </div>
    );
}
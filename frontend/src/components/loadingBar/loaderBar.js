import React, { useEffect } from "react"
import useStorage from "../hooks/useStorage"
import { useDispatch, useSelector } from "react-redux";
import { setUrl } from "../../reducers/imgUploader";
import "./loaderBar.css";

const LoaderBar = ({ file, setFile }) => {
    const dispatch = useDispatch();
    const { url, loader } = useStorage(file);
    console.log("URL ==> ", url, loader)
    // const state = useSelector((state) => {
    // 	return {
    // 		url: state.imgUploader.url
    // 	};
    // });
    // console.log("state",state)

    useEffect(() => {
        if (url) {
            dispatch(setUrl(url));
            setFile(null)
        }
    }, [url])

    return (
        <div className="loaderBar" style={{ width: loader + "%" }}>

        </div>
    )

}
export default LoaderBar
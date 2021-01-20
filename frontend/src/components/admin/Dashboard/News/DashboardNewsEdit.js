import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import DashboardEditor from './DashboardEditor';

export default function DashboardNewsCreate(props) {

    const createForm = useRef();
    const cateInput = useRef();
    const [inputValue, setInputValue] = useState([])
    const [file, setFile] = useState([])
    const [cateList, setCateList] = useState([])
    const news = props.news;
    
    const handleOnChange = (event) => {
        setInputValue({...inputValue, [event.target.name]: event.target.value})
    }

    const [newsTitle, setNewsTitle] = useState("")
    const [newsImg, setNewsImg] = useState([])
    const [newsCate, setNewsCate] = useState("")
    const [newsContent, setNewsContent] = useState("")

    useEffect(()=> {
        if (news) {
            setNewsTitle(news.newTitle)
            setNewsImg([news.newImg])
            setNewsCate(news.newCate)
            setNewsContent(news.newContent)
            axios.get(`http://pe.heromc.net:4000/news`)
                .then(res => {
                    const test = Object.values(res.data.reduce((a, {newCate}) => {
                        a[newCate] = a[newCate] || {newCate};
                        return a;
                    }, Object.create(null)));
                    setCateList(test)
                }
            )
        }
    },[news])

    const onSubmit = (event) => {
        event.preventDefault()
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        const formData = new FormData();
        const imageArr = Array.from(file);
        imageArr.forEach(image => {
            formData.append('newImg', image);
        });
        formData.append("newCate", newsCate);
        formData.append("newTitle", newsTitle);
        formData.append("newContent", newsContent);
        axios.post(`http://pe.heromc.net:4000/news/update/${news._id}`, formData, config)
        .then(()=>{
            props.setCloseEditFunc(false);
            props.setToastFunc(true);
        })
    }

    const addNewCate = () => {
        setCateList(cateList => [...cateList, {newCate: inputValue.cate}])
        cateInput.current.value = ""
    }

    const deleteImg = (event) => {
        const id = event.target.id
        const virutalFile = [...file]
        virutalFile.splice(id, 1)
        setFile(virutalFile)

        const items = [...newsImg]
        items.splice(id, 1)
        setNewsImg(items)
        axios.post(`http://pe.heromc.net:4000/news/update/${news._id}`, {
            deleteImgId: id
        })
    }

    return (
        <div className="DashboardProductInfo">
            <div className="create-box"> 
                <div className="create-box-title flex">
                    <div className="create-box-title-text">
                        News infomation
                    </div>
                    <div  
                        className="create-box-title-close flex-center"
                        onClick={()=>{
                            props.setCloseEditFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                </div>
                <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm}>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Title</div>
                        <div className="dashboard-right">
                            <input 
                                type="text" name="title" 
                                value={newsTitle || ""}
                                onChange={(event)=>{
                                    setNewsTitle(event.target.value)
                                }} required
                                ></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Images </div>
                        <div className="dashboard-right">
                            <input 
                                onChange={(event) => {
                                    const files = event.target.files;
                                    for (let i = 0; i< files.length; i++) {
                                        setNewsImg(news=>[...news, URL.createObjectURL(files[i])])
                                    }
                                    const fileArr = Array.prototype.slice.call(files)
                                    fileArr.forEach(item=>{ 
                                        setFile(file=>[...file, item])
                                    })
                                }}
                                type="file"
                                name="newsImg"
                                className="noborder"
                                multiple="multiple"
                                style={{height: '50px'}}
                            ></input>
                            <div className="flex" style={{ overflowY: 'hidden', flexWrap:'wrap'}}>
                                { newsImg && 
                                    newsImg.map((item, index) => {
                                        return (
                                            <div key={index} className="create-box-img">
                                                <img key={index} src={item} alt=""></img>
                                                <div 
                                                    className="create-box-img-overlay"
                                                >
                                                    <p
                                                        id={index}
                                                        onClick={deleteImg}
                                                        className="icon">X
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Category </div>
                        <div className="dashboard-right flex-center">
                            <select style={{ width: "350px"}} 
                                onChange={(event) => {setNewsCate(event.target.value)}}
                                value={newsCate}
                            >
                                <option></option>
                                { cateList.length > 0 &&
                                    cateList.map((item, index) => {
                                        return(
                                            <option key={index}>{item.newCate}</option>
                                        )
                                    })
                                }
                            </select>
                            <input type="text" name="cate" placeholder="New category?" style={{  margin:'0 10px'}} onChange={handleOnChange} ref={cateInput}></input>
                            <div className="btn" style={{
                                fontSize: '14px',
                                fontFamily: 'sans-serif',
                                fontWeight: '300',
                                padding: '0 10px',
                                cursor: 'pointer',
                                width: '350px',
                                height: '30px'
                            }}
                            onClick={addNewCate}>
                                Add
                            </div>
                        </div>
                    </div>
                    <div style={{border: '1px #ddd solid'}}>
                        <DashboardEditor
                            newsContent = {newsContent}
                            setNewsContent= {setNewsContent}
                        />
                    </div>
                    <div className="flex-center" style={{marginTop: '40px'}}>
                    <button className="create-box-btn btn">
                        Edit news
                    </button>
                </div>
                </form>
            </div>
        </div>
    )
}
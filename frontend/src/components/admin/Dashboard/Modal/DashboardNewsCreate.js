import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import DashboardEditor from './DashboardEditor';

export default function DashboardNewsCreate(props) {

    const createForm = useRef();
    const cateInput = useRef();
    const [inputValue, setInputValue] = useState([])
    const [cate, setCate] = useState([])
    const [cateValue, setCateValue] = useState("")
    const [file, setFile] = useState([])

    const handleOnChange = (event) => {
        setInputValue({...inputValue, [event.target.name]: event.target.value})
    }
    
    useEffect(()=> {
        axios.get(`http://localhost:4000/category`)
            .then(res => {
                setCate(res.data)
            })
    },[])

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
            formData.append('news', image);
        });

        formData.append("productName", inputValue.name);
        formData.append("productSale", inputValue.sale);
        formData.append("productPrice", inputValue.price);
        formData.append("productDate", new Date());
        axios.post('http://localhost:4000/products', formData, config)
        props.setCloseCreateFunc(false);
        props.setToastFunc(true);
    }

    const addNewCate = () => {
        axios.post('http://localhost:4000/category', {
            cateName: inputValue.cate
        })
        setCate(cate=>[...cate, {cateName: inputValue.cate}])
        setCateValue(inputValue.cate)
        cateInput.current.value = ""
    }

    console.log(file)
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
                            props.setCloseCreateFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                </div>
                <form onSubmit={onSubmit} encType="multipart/form-data" ref={createForm}>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Title</div>
                        <div className="dashboard-right">
                            <input type="text" name="title" onChange={handleOnChange} required></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Category </div>
                        <div className="dashboard-right flex-center">
                            <select style={{ width: "350px"}} 
                                onChange={(event) => {setCateValue(event.target.value)}}
                                value={cateValue}>
                                <option></option>
                                { cate.length > 0 &&
                                    cate.map((item, index) => {
                                        return(
                                            <option key={index}>{item.cateName}</option>
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
                                Add new category
                            </div>
                        </div>
                    </div>
                    <DashboardEditor/>

                    <div className="flex-center" style={{marginTop: '40px'}}>
                    <button className="create-box-btn btn">
                        Add product
                    </button>
                </div>
                </form>
            </div>
        </div>
    )
}
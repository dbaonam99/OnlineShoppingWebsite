import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function DashboardProductCreate(props) {

    const createForm = useRef();
    const cateInput = useRef();
    const groupCateInput = useRef();
    const [isCheckedSmall, setIsCheckedSmall] = useState(false);
    const [isCheckedMedium, setIsCheckedMedium] = useState(false);
    const [isCheckedLarge, setIsCheckedLarge] = useState(false);
    const [inputValue, setInputValue] = useState([])
    const [cate, setCate] = useState([])
    const [cateValue, setCateValue] = useState("")
    const [size, setSize] = useState([])
    const [sex, setSex] = useState("")
    const [file, setFile] = useState([])
    const [productGroupCate, setProductGroupCate] = useState("")
    const [productGroupCateList, setProductGroupCateList] = useState([])

    const [productImg, setProductImg] = useState([])

    const checkedSize = (event) => {
        if (event.target.id === "1") {
            if (isCheckedSmall) {
                setIsCheckedSmall(false)
            } else {
                setSize(size=>[...size, 'Small'])
                setIsCheckedSmall(true)
            }
        }
        if (event.target.id === "2") {
            if (isCheckedMedium) {
                setIsCheckedMedium(false)
            } else {
                setSize(size=>[...size, 'Medium'])
                setIsCheckedMedium(true)
            }
        }
        if (event.target.id === "3") {
            if (isCheckedLarge) {
                setIsCheckedLarge(false)
            } else {
                setSize(size=>[...size, 'Large'])
                setIsCheckedLarge(true)
            }
        }
    }

    const handleOnChange = (event) => {
        setInputValue({...inputValue, [event.target.name]: event.target.value})
    }
    
    useEffect(()=> {
        axios.get(`http://pe.heromc.net:4000/products`)
            .then(res => {
                const test = Object.values(res.data.reduce((a, {productGroupCate}) => {
                    a[productGroupCate] = a[productGroupCate] || {productGroupCate};
                    return a;
                }, Object.create(null)));
                setProductGroupCateList(test)
            }
        )
        axios.get(`http://pe.heromc.net:4000/category`)
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
            formData.append('productImg', image);
        });

        formData.append("productName", inputValue.name);
        formData.append("productSale", inputValue.sale);
        formData.append("productPrice", inputValue.price);
        formData.append("productCate", cateValue);
        formData.append("productGroupCate", productGroupCate);
        formData.append("productSize", size);
        formData.append("productDes", inputValue.des);
        formData.append("productSex", sex);
        formData.append("productDate", new Date());
        axios.post('http://pe.heromc.net:4000/products', formData, config)
        .then(()=>{
            props.setCloseCreateFunc(false);
            props.setToastFunc(true);
        })
    }

    const addNewCate = () => {
        axios.post('http://pe.heromc.net:4000/category', {
            cateName: inputValue.cate
        })
        setCate(cate=>[...cate, {cateName: inputValue.cate}])
        setCateValue(inputValue.cate)
        cateInput.current.value = ""
    }

    const addNewGroupCate = () => {
        setProductGroupCate(inputValue.groupCate)
        setProductGroupCateList(productGroupCateList => [...productGroupCateList, {productGroupCate: inputValue.groupCate}])
        groupCateInput.current.value = ""
    } 

    const deleteImg = (event) => {
        const virutalFile = [...file]
        virutalFile.splice(event.target.id, 1)
        setFile(virutalFile)

        const items = [...productImg]
        items.splice(event.target.id, 1)
        setProductImg(items)
    }

    return (
        <div className="DashboardProductInfo">
            <div className="create-box"> 
                <div className="create-box-title flex">
                    <div className="create-box-title-text">
                        Product infomation
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
                        <div className="dashboard-left flex">Name</div>
                        <div className="dashboard-right">
                            <input type="text" name="name" onChange={handleOnChange} required></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Images </div>
                        <div className="dashboard-right">
                            <input 
                                onChange={(event) => {
                                    const files = event.target.files;
                                    for (let i = 0; i< files.length; i++) {
                                        setProductImg(product=>[...product, URL.createObjectURL(files[i])])
                                    }
                                    const fileArr = Array.prototype.slice.call(files)
                                    fileArr.forEach(item=>{
                                        
                                        setFile(file=>[...file, item])
                                    })
                                }}
                                type="file"
                                name="productImg"
                                className="noborder"
                                multiple="multiple"
                                style={{height: '50px'}}
                            ></input>
                            <div className="flex" style={{ overflowY: 'hidden', flexWrap:'wrap'}}>
                                { productImg && 
                                    productImg.map((item, index) => {
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
                        <div className="dashboard-left flex">Defaut price </div>
                        <div className="dashboard-right">
                            <input type="number" name="price" placeholder="USD" onChange={handleOnChange} required></input>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Sale off </div>
                        <div className="dashboard-right flex-center">
                            <input type="number" placeholder="%" style={{ width: "100px"}} onChange={handleOnChange} name="sale" required></input>
                            <label>From: </label>
                            <input type="date"  name="fromdate" onChange={handleOnChange} placeholder="dd/mm/yyyy" pattern="(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)"/>
                            <label>To: </label>
                            <input type="date"  name="todate" onChange={handleOnChange} placeholder="dd/mm/yyyy" pattern="(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)"/>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Category group</div>
                        <div className="dashboard-right flex-center">
                            <select style={{ width: "350px"}} 
                                onChange={(event) => {setProductGroupCate(event.target.value)}}
                                value={productGroupCate}
                            >
                                { productGroupCateList.length > 0 &&
                                    productGroupCateList.map((item, index) => {
                                        return(
                                            <option key={index}>{item.productGroupCate}</option>
                                        )
                                    })
                                }
                            </select>
                            <input type="text" name="groupCate" placeholder="New category group?" style={{  margin:'0 10px'}} onChange={handleOnChange} ref={groupCateInput}></input>
                            <div className="btn" style={{
                                fontSize: '14px',
                                fontFamily: 'sans-serif',
                                fontWeight: '300',
                                padding: '0 10px',
                                cursor: 'pointer',
                                width: '350px',
                                height: '30px'
                            }}
                            onClick={addNewGroupCate}>
                                Add
                            </div>
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
                                Add
                            </div>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Sex </div>
                        <div className="dashboard-right flex">
                            <select style={{ width: "200px"}} 
                                onChange={(event) => {setSex(event.target.value)}}
                                value={sex}
                                required>
                                <option></option>
                                <option>Man</option>
                                <option>Woman</option>
                            </select>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Size </div>
                        <div className="dashboard-right flex">
                            <div 
                                className={isCheckedSmall ? "size-check isChecked" : "size-check"}
                                id="1" 
                                onClick={checkedSize}>Small</div>
                            <div 
                                className={isCheckedMedium ? "size-check isChecked" : "size-check"}
                                id="2" 
                                onClick={checkedSize}>Medium</div>
                            <div 
                                className={isCheckedLarge ? "size-check isChecked" : "size-check"}
                                id="3" 
                                onClick={checkedSize}>Large</div>
                        </div>
                    </div>
                    <div className="create-box-row flex">
                        <div className="dashboard-left flex">Description </div>
                        <div className="dashboard-right">
                            <input type="text" name="des" onChange={handleOnChange} required></input>
                        </div>
                    </div>

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
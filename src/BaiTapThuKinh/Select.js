import React, { Component } from 'react'

export default class Select extends Component {
    dataGlass= [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    state = {
        srcImg: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        
    }
    renderGlass = () => {
        return this.dataGlass.map((glass, index) => {
            return <div className="h-75 col-2 my-2" key={index}>
                <button className="btn h-100"  type="button" onClick ={()=>{
                    this.changImg(glass)
                }}>
                    <img className="w-100 h-100" src={glass.url} />
                </button>
            </div>
        })

    }
    changImg = (sanPhamClick) => {
        console.log('sanPhamClick',sanPhamClick)
        this.setState({
            // srcImg: "./glassesImage/v" + val + ".png"
            srcImg: sanPhamClick
        })
    }
    render() {
        let { srcImg } = this.state
        return (
            <div className="container-md">
                <div className="row my-5">
                    <div className="col-6">
                        <div className="card w-50 mx-auto" style={{
                            backgroundImage: "url(./glassesImage/model.jpg)",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            height: "370px",
                            position: "relative"
                        }}>
                            <img src={srcImg.url} className="w-50" style={{
                                position: "absolute",
                                top: "24%",
                                left: "25%"
                            }} />
                            <div className="content text-left" style={{backgroundColor:'#f3ad7b',
                                                                        opacity:'0.7',
                                                                        position:'absolute',
                                                                        bottom:'0'}}>
                                <h5 style={{color:'#8659a9'}}>{srcImg.name}</h5>
                                <p style={{color:'white'}}>{srcImg.desc}</p>
                            </div>  
                        </div>
                        
                    </div>
                    <div className="col-6">
                        <div className="card w-50 mx-auto" style={{
                            backgroundImage: "url(./glassesImage/model.jpg)",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            height: "370px"
                        }}></div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="card h-100 py-3">
                        <div className="row">
                            {this.renderGlass()},
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Write() {
    const [value, setValue] = useState('');
    console.log(value);
    return (
        <div className='add'>
            <div className="content">
                <input type="text" placeholder='title' />
                <div className="editorContainer">
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b>Draft
                    </span>
                    <span>
                        <b>Visibility: </b>Public
                    </span>
                    <input type="file" style={{ display: "none" }} name="" id="file" />
                    <label className='file' htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save As Draft</button>
                        <button>update</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                        <input type="radio" name="art" value="art" id="art" />
                        <label htmlFor="art">Art</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="science" value="science" id="science" />
                        <label htmlFor="science">Science</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="tech" value="tech" id="tech" />
                        <label htmlFor="tech">Tech</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="design" value="design" id="design" />
                        <label htmlFor="design">Design</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="food" value="food" id="food" />
                        <label htmlFor="food">Food</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write;
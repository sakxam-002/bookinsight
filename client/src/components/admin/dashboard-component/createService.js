import React from 'react'
import './createService.css'

function CreateService(){
    return(
        <>
        <div class="form-container">
        <form>
            <div class="upload-box">
                <label for="file-upload" class="custom-file-upload">
                    Click to upload or drag and drop<br/>
                    <span class="desc">SVG, PNG, JPG or GIF (MAX. 800*400px)</span>
                </label>
                <input id="file-upload" type="file" />
            </div>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" name="title"/>
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="text" id="price" name="price"/>
            </div>
            <div class="form-group">
                <label for="rating">Rating</label>
                <input type="text" id="rating" name="rating"/>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea id="description" name="description"></textarea>
            </div>
            <button type="submit" class="submit-btn">Submit</button>
        </form>
    </div>
        </>
    )
}

export default CreateService
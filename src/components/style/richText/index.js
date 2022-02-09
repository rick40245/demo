import React, { useState, useRef, useEffect } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import './index.scss'

export default function RichText(props) {

    const API_URL = "http://url:8080";
    const UPLOAD_ENDPOINT = "image/uploadImage";

    const config = {
        fontFamily: {
            options: [
                'default',
                'Ubuntu, Arial, sans-serif',
                'Ubuntu Mono, Courier New, Courier, monospace'
            ],
        },
        toolbar: ['heading','|', 'bold','italic','|', 'outdent','indent','link','|','bulletedList', 'numberedList','|','uploadImage','|','undo','redo'],
        shouldNotGroupWhenFull: true,
        extraPlugins: [uploadPlugin],
    }

    // Upload Function
    function uploadPlugin(editor) {
        console.log("be called")
        console.log(editor)
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
          return uploadAdapter(loader);
        };
    }

    function uploadAdapter(loader) {
        return {
          upload: () => {
            return new Promise((resolve, reject) => {
              const body = new FormData();
              loader.file.then((file) => {
                console.log(file)
                body.append("files", file);
                console.log("body:",body)

                // fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
                //   method: "post",
                //   body: body,
                //   redirect: 'follow'
                // })
                // .then((res) => res.json())
                // .then((res) => {
                //     resolve({
                //       default: `${API_URL}${res.default}`
                //     });
                // })
                // .catch((err) => {
                //     reject(err);
                // });

              });
            });
          }
        };
      }


    return(
        <CKEditor
                    editor={ ClassicEditor }
                    // data="<p>Hello from CKEditor 5!</p>"
                    data=""
                    config={config}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                        editor.editing.view.change((writer) => {
                          writer.setStyle(
                            "height",
                            "190px",
                            editor.editing.view.document.getRoot()
                          );
                        });
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
        />
    )
}
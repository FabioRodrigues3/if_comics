import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { comicApi } from '../../services/api'
import axios from 'axios'

export function TestForm() {
  const [file, setFile] = useState()

  const submit = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('image', file)
    await axios
      .post('http://localhost:3333/test', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .catch((err) => console.log(err))
  }

  const fileSelected = (event) => {
    const file = event.target.files[0]
    setFile(file)
  }

  return (
    <div>
      <form
        encType="multipart/form-data"
        onSubmit={submit}
        style={{ width: 650 }}
      >
        <input
          onChange={fileSelected}
          name="image"
          type="file"
          accept="image/*"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

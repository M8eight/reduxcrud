// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from './slices/todoSlice';
import { getVideos} from './helpers/requests';
import { addReport } from './slices/videoSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const video = useSelector(state => state.video);

  useEffect(() => {
    dispatch(getVideos())
  }, [])

  useEffect(() => {
    console.log(video)
  }, [video])

  function submit(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("message", e.target.message.value);
    form.append("videoId", 1);
    dispatch(addReport(form));




    
  }

  return (
    <div className="App">
      <img src="image.jpg" style={{ height: 400 }} alt="logo" />

      <h1>{video.videos.length}</h1>

      {video.loading && (
        <div class="spinner-border" role="status">
        </div>
      )}

      {video.videos.map((video) => {
        return (
          <div key={video.id}>
            <h1>{video.name}</h1>
            <p>{video.description}</p>
          </div>
        )
      })}

      <form onSubmit={submit}>
          <input type="text" name="message" />
          <button type="submit">Add</button>
        </form>

    </div>
  );
}

export default App;

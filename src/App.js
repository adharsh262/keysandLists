import UserProfile from './components/UserProfile'
import './App.css'
const userDetailsList = [
  {
    uniqueNo: 1,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Abhiram',
    role: 'Software Developer',
  },

  {
    uniqueNo: 2,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Abhiram',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Abhiram',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Abhiram',
    role: 'Software Developer',
  },
]

const App = () => {
  return (
    <div className="list-container">
      <h1 className="title ">Users List</h1>
      <ul>
        {userDetailsList.map(forEach => (
          <UserProfile userDetails={forEach} key={forEach.uniqueNo} />
        ))}
      </ul>
    </div>
  )
}

export default App

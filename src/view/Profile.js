import Bio from '../components/Bio/Bio';
import ChatsSettings from '../components/ChatsSettings/ChatsSettings';
import NavBarProfile from '../components/NavBarProfile/NavBarProfile';
import Tags from '../components/Tags/Tags';

const Profile = () => {
  return (
    <div className='profile'>
      <NavBarProfile/>
      <Bio/>
      <Tags/>
      <ChatsSettings/>
    </div>
  )
}

export default Profile;
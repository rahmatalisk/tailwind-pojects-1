
import './App.css';
import CreateMapModal from './Components/CreateMapModal/CreateMapModal';
import DeleteAccountModal from './Components/DeleteAccountModal/DeleteAccountModal';
import DeleteCommentModal from './Components/DeleteCommentModal/DeleteCommentModal';
import EditModal from './Components/EditModal/EditModal';
import PopUpModal from './Components/PopUpModal/PopUpModal';
import PublishSubModal from './Components/PublishSubModal/PublishSubModal';
import ReportUserModal from './Components/ReportUserModal/ReportUserModal';
import SetTagModal from './Components/SetTagModal/SetTagModal';

function App() {

  return (
    <div className='gap-y-10 mt-24 ml-10'>
      <PopUpModal ></PopUpModal>

      <SetTagModal></SetTagModal>
      <ReportUserModal></ReportUserModal>
      <PublishSubModal></PublishSubModal>
      <EditModal></EditModal>
      <CreateMapModal></CreateMapModal>
      <DeleteAccountModal></DeleteAccountModal>
      <DeleteCommentModal></DeleteCommentModal>
    </div >
  );
}

export default App;

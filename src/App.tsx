import React from 'react';
import { NavBar, Modal } from '@components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, NotFoundPage } from '@pages';
import './App.css';

// const AuthRoutes = () => {
//   return (
//     <Routes>
//       <Route path='/auth' element={<LoginPage />} />
//       <Route path='/registration' element={<RegistrationPage />} />
//       <Route path='*' element={<Navigate to={'/auth'} />} />
//     </Routes>
//   );
// };
const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

function App() {
  const [isOpenModal, setIsModalOpen] = React.useState(false);
  const modalFunc = () => {
    setIsModalOpen(!isOpenModal);
  };
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <NavBar openModal={modalFunc} />
          {/* {auth === false ? <AuthRoutes /> : <MainRoutes />} */}
          <MainRoutes />
          {isOpenModal && (
            <Modal
              modal={isOpenModal}
              closeModal={modalFunc}
              children={<Login />}
            />
          )}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import { HeaderContainer, DateContainer, MenuBarContainer} from './styles';
import logo from '../../assets/logo.png';
import userImg from '../../assets/user.png';
import { UserAuth } from '../../contexts/AuthContext';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

interface IHeaderProps {
  title: string;
  topPhrase: string;
}

const Header: React.FC<IHeaderProps> = ({ title, topPhrase }: IHeaderProps) => {
  const {user, logOut} = UserAuth();
  const startDate = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = React.useState<string>(startDate);
  const [showAll, setShowAll] = React.useState<boolean>(false);
  const dateRef = React.useRef<HTMLInputElement>(null);

  const handleLogout = async () => {
    try{
      await logOut();
    } catch (error)  {
      console.log(error);
    }
  }

   const handleDateIncDec = (days: number) => {
      const date = new Date(selectedDate);
      date.setDate(date.getDate() + days);
      const dateStr = date.toISOString().split("T")[0];
      setSelectedDate(dateStr);
      if (dateRef !== null && dateRef.current !== null) {
        dateRef.current.value = dateStr;
      }
    };
  
    const handleDateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedDate(event.target.value);
    };

  return (
    <HeaderContainer>
        <p className='topbar'>{topPhrase}</p>
        <div className='titlebar'>
          <h1><img src={logo} /> {title}</h1>
            {(
              user !== null &&
              user.displayName !== undefined &&
              user.photoURL !== null &&
              user.photoURL !== undefined

            )?(
                <DateContainer>
                    {/* <input type={'checkbox'} onChange={(e) => setShowAll(e.target.checked)}></input> */}
                    <FiArrowLeft size={30} onClick={() => handleDateIncDec(-1)}/>
                      <input
                        ref={dateRef}
                        type="date"
                        defaultValue={startDate}
                        onChange={handleDateChanged}
                      />
                    <FiArrowRight size={30} onClick={() => handleDateIncDec(1)}/>
                </DateContainer>
            ):null}
            {(
              user !== null &&
              user.displayName !== undefined &&
              user.photoURL !== null &&
              user.photoURL !== undefined

            )?(
              <MenuBarContainer>
                <img src={user.photoURL?user.photoURL:userImg} onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src=userImg;
                }} alt="User photograph" onClick={() => handleLogout()}/>
              </MenuBarContainer>
            ):null}
          </div>
    </HeaderContainer>
  );
};

export default Header;

//will use subscriptionById and postsById
import React from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';
import { Post } from '../../../models/post';
import { User } from '../../../models/user';
import { UserState } from '../../../redux/user/userReducer';
import { connect } from 'react-redux';
import './style.css';
// import { Pic } from "../../../fileUpdoad";

interface IUserProfileState {
  response: User;
  posts: Post[];
  data: boolean;
}

class UserProfileComponent extends React.Component<any, IUserProfileState> {
  constructor(props: any) {
    super(props);
    this.state = {
      response: new User(0, '', '', ''),
      posts: [],
      data: false,
    };
  }

  // componentDidMount = async () => { OLD PROFILE COMPONENT DID MOUNT
  //   this.setState({
  //     response: await getUsersById(this.props.currUser.userId),
  //     posts: await getPostsByUserId(this.props.currUser.userId),
  //     data: true,
  //   });
  // };

  // changePic = async (e: any) => {
  //   e.preventDefault();
  //   const updateUserObj = new User(
  //     this.state.response.userId,
  //     this.state.response.username,
  //     this.state.response.alias,
  //     this.state.response.role,
  //     this.state.response.password,
  //     e.currentTarget.value
  //   );
  //   this.setState({
  //     response:await updateUser(updateUserObj)
  //   })
  // };

  updateUser = (id: number) => {};

  render() {
    return (
      <Container className='main-container' style={{ overflowY: 'auto' }}>
        <Row>
          <h1>hi from profile</h1>
          <Col xs={8} className='offset-2 center-div'>
            <Container className='profile-container'></Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state: UserState) => {
  return {
    ...state,
  };
};

export const UserProfile = connect(mapStateToProps)(UserProfileComponent);

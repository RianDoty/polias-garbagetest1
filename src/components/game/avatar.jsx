const avatars = {
  0: 'https://cdn.glitch.me/35125d36-1414-4625-886d-50b6771f7d06%2Fbaseavatar.png?v=1636495856765',
}

const Avatar = ({cardID = 0, size = '40px'}) => {
  const image = avatars[cardID] || avatars[0];
  
  return <img src={image} className='avatar' style={{height: `${size}`}}/>;
}

export default Avatar
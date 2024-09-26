export default function User({ name , mail, image}) {
    return (
    <div className="user-card">
      <img src={image} alt={name} />
          <h2>{name}</h2>
          <h2>{mail}</h2> 
    </div>

);
    
  }
import './styles.css';

function Content (prop) {
  
  return(
    <section>
      <h1 className='content'>{prop.data}</h1>

      <section className='content'>
        <h2>Hello, Wellcome to Toys Family</h2>
        <p>Site is still under development and testing</p>
      </section>
    </section>
  );
}

export default Content;
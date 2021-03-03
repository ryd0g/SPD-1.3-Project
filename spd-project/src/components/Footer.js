import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <section id='footer'>
      <div class='footer p-2'>
        <p class='copyright'>&copy; Club Penguin 2021</p>
        <a
          class='btn btn-social-icon btn-github'
          href='https://github.com/ryd0g'
          title='Ryan'
          target='blank'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          class='btn btn-social-icon btn-github'
          href='https://github.com/guiisgooey'
          title='Andrew'
          target='blank'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          class='btn btn-social-icon btn-github'
          href='https://github.com/MaybeJaybe'
          title='Jay'
          target='blank'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          class='btn btn-social-icon btn-github'
          href='https://github.com/ashrajgrewal'
          title='Ashraj'
          target='blank'>
          <FontAwesomeIcon icon={faGithub} />
        </a>  
      </div>
    </section>
  );
}

export default Footer;
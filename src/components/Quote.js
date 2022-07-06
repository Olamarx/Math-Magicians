import React from 'react';
import Nav from './Nav';
import style from './Quote.module.css';

function Quotes() {
  return (
    <>
      <Nav />
      <section className={style.section}>
        <article>

          <figure>
            <blockquote>
              <p>
                In time of despair, make sure you know how to repair.
              </p>
            </blockquote>
            <figcaption>
              —Olaoluwa Owoeye Olamarx
            </figcaption>

          </figure>

          <figure>
            <blockquote>
              <p>
                Those who failed in the art of magic thought they
                lacked good props, what they really lacked
                was good practice.
              </p>
            </blockquote>
            <figcaption>
              —Amit Kalantri
            </figcaption>

          </figure>
          <figure>
            <blockquote>
              <p>
                She was their witch queen, and they adored her.
              </p>
            </blockquote>
            <figcaption>
              —Lev Grossman
            </figcaption>
          </figure>

          <figure>
            <blockquote>
              <p>
                We may share an ability, you and I, but that does not make us equals.
              </p>
            </blockquote>
            <figcaption>
              —V.E. Schwab
            </figcaption>
          </figure>

          <figure>
            <blockquote>
              <p>
                The most talented of all
                magicians in this world is
                undoubtedly foggy mornings!
              </p>
            </blockquote>
            <figcaption>
              —Mehmet Murat ildan
            </figcaption>
          </figure>

        </article>
      </section>
    </>
  );
}

export default Quotes;

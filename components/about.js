import Image from 'next/image';

export default function About() {
    return (
        <div className="dark d-flex">
            <div className="w-50 px-5 py-3">
                <div>
                    <h2>Sobre Bernardo</h2>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam reiciendis consequuntur odio natus quidem hic ut voluptatem adipisci in praesentium, tempore nemo eius consequatur magni odit necessitatibus. Excepturi, accusamus?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam reiciendis consequuntur odio natus quidem hic ut voluptatem adipisci in praesentium, tempore nemo eius consequatur magni odit necessitatibus. Excepturi, accusamus?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam reiciendis consequuntur odio natus quidem hic ut voluptatem adipisci in praesentium, tempore nemo eius consequatur magni odit necessitatibus. Excepturi, accusamus?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam reiciendis consequuntur odio natus quidem hic ut voluptatem adipisci in praesentium, tempore nemo eius consequatur magni odit necessitatibus. Excepturi, accusamus?</p>
                </div>
            </div>
            <div className="w-50">
                <Image src="https://picsum.photos/600/400" alt="Bernardo Gomes Nunes" width={600} height={400} layout="responsive" />
            </div>
        </div>
    )
}
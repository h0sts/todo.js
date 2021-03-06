import React from 'react';

function Footer() {
    return(
        <div className="footer">
            <h3>Created By</h3>
            <h2><a href="https://vk.com/delvinru" target="_blank" rel="noopener noreferrer" title="Страница разработчика">Alexey Kolesnikov</a></h2>
            <ul>
                <li>
                    <a href="https://github.com/h0sts/h0sts.github.io" target="_blank" rel="noopener noreferrer" title="Исходник проекта">
                        <i //eslint-disable-next-line react/jsx-no-target-blank
                        className="fa fa-github fa-4x" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;

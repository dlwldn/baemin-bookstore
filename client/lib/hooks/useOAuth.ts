import axios from 'axios';
import router from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/module/user';

const GOOGLE_CLIENT_ID = ``;
const GOOGLE_REDIRECT_URI = `http://localhost:3000/callback/google`;
const GOOGLE_OAUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&response_type=token&redirect_uri=${GOOGLE_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email`;
const GITHUB_CLIENT_ID = ``;
const GITHUB_SECRET_CLIENT_ID = ``;
const GITHUB_REDIRECT_URI = `http://localhost:3000/callback/github`;
const GITHUB_OAUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${GITHUB_REDIRECT_URI}`;

export default function useOAuth() {
    const dispatch = useDispatch();

    useEffect(() => {
        const platformName = router.pathname.split('/')[2];
        const url = new URL(window.location.href);
        const hash = url.hash;
        console.log(url, hash, router.query.access_token, router.pathname);
        if (platformName === 'google') {
            const accessToken = hash.split('=')[1].split('&')[0];
            axios
                .get(
                    'https://www.googleapis.com/oauth2/v2/userinfo?access_token=' +
                        accessToken,
                    {
                        headers: {
                            authorization: `token ${accessToken}`,
                            accept: 'application/json',
                        },
                    }
                )
                .then((res) => {
                    console.log(res);
                    dispatch(
                        setUser({ id: res.data.id, email: res.data.email })
                    );
                    router.push('/');
                })
                .catch((e) => console.log('oAuth token expired'));
        }

        if (platformName === 'github') {
            const code = url.search.split('=')[1];
            requestGithub(code);
        }
    }, []);

    const requestGithub = async (code: string) => {
        const response = await axios.post(`http://localhost:8000/auth`, {
          code,
        });
        
        const token = response.data;

        await axios
            .get('https://api.github.com/user', {
                headers: {
                    Authorization: `token ${token}`,
                    accept: 'application/json',
                },
            }).then((res)=> {
                console.log(res);
                dispatch(
                    setUser({ id: res.data.id, email: res.data.html_url })
                );
                router.push('/');
            }).catch((e) => console.log('oAuth token expired'));
    };

    const _onClickGoogleSign = () => {
        window.location.assign(GOOGLE_OAUTH_URL);
    };

    const _onClickGithubSign = () => {
        window.location.assign(GITHUB_OAUTH_URL);
    };

    return {
        _onClickGoogleSign,
        _onClickGithubSign,
    };
}

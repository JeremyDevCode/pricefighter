/* eslint-disable react/no-unknown-property */
import Head from 'next/head'
import { SettingsProvider } from '../context/SettingsContext'
import { ModalProvider } from '../context/ModalContext'
import { Modal } from '../components/Modal'
import { StreamerGrid } from '../components/StreamerGrid'
import '../styles/globals.css'
import { AuthProvider } from '../context/AuthContext'
import { AudioComponent } from '../components/AudioComponent'
import { SoundEffectsProvider } from '../context/SoundEffectsContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <SettingsProvider>
        <SoundEffectsProvider>
          <ModalProvider>
            <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
              />
              <link
                href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
              ></link>
              <title>Price Fighter - Can you pick the right price?</title>
            </Head>
            <StreamerGrid>
              <div className="flex relative overflow-hidden">
                <Modal />
                <Component {...pageProps} />
              </div>
            </StreamerGrid>
            <AudioComponent />
          </ModalProvider>
        </SoundEffectsProvider>
      </SettingsProvider>
    </AuthProvider>
  )
}

export default MyApp

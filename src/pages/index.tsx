import { FunctionComponent, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { Stateful } from '../components';

const Index: FunctionComponent = () => (
  <>
    {/* For the sake of simplicity, I've added the RecoilRoot here, but in a
        real application, it'd be in the `gatsby-browser` and `gatsby-ssr`
        files. This does not make a difference for this issue. */}
    <RecoilRoot>
      <Suspense fallback={<p>Loading</p>}>
        {/* Stateful uses an asynchronous selector, so it will suspend until the
        value is available. */}
        <Stateful />
      </Suspense>
    </RecoilRoot>
  </>
)

export default Index;
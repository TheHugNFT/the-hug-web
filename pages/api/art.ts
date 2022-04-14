import { NextApiRequest, NextApiResponse } from 'next'
import renderArt from '../../renderer/render-art';

export default (req: NextApiRequest, res: NextApiResponse) => {

  const TEST_SEED =
      '358EE8778365A04FA408D16DC04D56E75CD4CAE0BB4FC1D4AB6CE8843A9E55D'
  // '8CDB8FA074BC8A94B0FCD54E34259F66C9EC06B7736480A5E21DA6A1DE3F3EB6',
  //     '8042A62ADF1AC7AD51C4A773F33EDD7E430341C049180B2AB77A1EB5720AADE4',
  //     '550852CEC79D393F28BE46820F5564263D64A2D561B533B81DDE6B17CD2F18EC',

  let seed =
      req['test'] && req['test'] === 'test'
          ? TEST_SEED
          : req['seed']
  if (seed && seed.length < 64) {
    console.log('SEED LENGTHEN', seed.length)
    seed = '0' + seed
  }

  //short circuit
  seed = TEST_SEED

  let out = renderArt(seed)

  // res.status(200).json({ text: 'Hello' })
  // res.set('Content-Type', 'image/svg+xml')
  res.setHeader('Content-Type', 'image/svg+xml')

  res.send(out)

}

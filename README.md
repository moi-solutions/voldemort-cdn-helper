# voldemort-cdn-helper

Helper to fetch CDN files.

### Example

    import Cdn from 'voldemort-cdn-helper';

    ...
    Cdn.image('ara-173x126.png')

    // https://gandalf-cdn.herokuapp.com/images/ara-173x126.png
    ...

### Generate new version

Update version property on **package.json**.

    $ yarn dist

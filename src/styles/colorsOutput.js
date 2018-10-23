export const styles = {
    paper: {
        width: '90vw',
        margin: '20px auto',
        height: 'auto',
        padding: 40,
    },
    color: {
        margin: '15px 0',
    },
    bar: {
        height: 20,
        position: 'relative',
        overflow: 'hidden',
    },
    innerBar: {
        transition: 'transform .4s linear',
        willChange: 'transform',
        top: 0,
        left: 0,
        width: '100%',
        bottom: 0,
        position: 'absolute',
        transformOrigin: 'left',
    },
};

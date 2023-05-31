import logging as log

log.basicConfig(level=log.DEBUG,
                format='%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s',
                datefmt='%I:%M:%S %p',
                handlers=[
                    log.FileHandler('capa_datos.log'),
                    log.StreamHandler()
                ])
if __name__ == '__main__':
    log.debug('Mensaje a nivel depuracion')
    log.info('Mensaje a nivel informacion')
    log.warning('Mensaje a nivel advertencia')
    log.error('Mensaje a nivel error')
    log.critical('Mensaje a nivel critico')
    
// components/DownloadChoiceModal.js
// Displays a centered modal which allows the visitor to choose which of the
// App/Play stores they wish to be redirected to.
import { Modal, Container, Col, Row, Image } from 'react-bootstrap';

export function DownloadChoiceModal({showing, onChange}) {
    return (
        <Modal show={showing} onHide={() => onChange(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Download MyBalance</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col className="d-flex align-items-center" xs={6}> 
                            <a href='https://play.google.com/store/apps/details?id=earth.mybalance.mybalance&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                                <Image fluid width="100%" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
                            </a>
                        </Col>
                        <Col className="d-flex align-items-center" xs={6}>
                            <Container>
                                <a href='https://apps.apple.com/gb/app/mybalance/id1501751263'>
                                    <Image fluid width="100%" alt='Download from the App Store' src='/assets/img/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg' />
                                </a>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
          </Modal>
      );
}
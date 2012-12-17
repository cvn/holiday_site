            <div class="shelf-inner">
              <form action="/thebellringer/services/add-donation.php" method="post" id="payment-form">
                <div class="shelf-left">
                  <div class="amount-header t-font yellow t-vlarge t-bold">Donation Amount</div>
                  <div class="form-amount">
                    <input type="radio" name="amount" id="amount-5" value="5">
                    <label for="amount-5">
                      <span class="amount-dollar">$</span><span class="amount-sprite zero">0</span><span class="amount-sprite five">5</span>
                    </label>
                  </div>
                  <div class="form-amount">
                    <input type="radio" name="amount" id="amount-15" value="15" checked>
                    <label for="amount-15">
                      <span class="amount-dollar">$</span><span class="amount-sprite one">1</span><span class="amount-sprite five">5</span>
                    </label>
                  </div>
                  <div class="form-amount">
                    <input type="radio" name="amount" id="amount-50" value="50">
                    <label for="amount-50">
                      <span class="amount-dollar">$</span><span class="amount-sprite five">5</span><span class="amount-sprite zero">0</span>
                    </label>
                  </div>
                  <div class="form-amount">
                    <input type="radio" name="amount" id="amount-custom" value="other">
                    <label for="amount-custom">
                      <span class="amount-dollar">$</span><div class="form-area"><input type="text" class="amount-other t-center" autocomplete="off" name="amount-other" placeholder="Other"></div>
                    </label>
                  </div>
                  <span class="payment-errors t-medium"></span>
                </div><div class="shelf-right">
                  <div class="shelf-secured t-small">
                    <img src="/thebellringer/images/lock.png" class="t-icon"> This transation is secured by <a href="https://stripe.com" target="_blank"><img src="/thebellringer/images/stripe-small.png" class="t-icon stripe-b" alt="Stripe"></a>
                  </div>
                  <div class="t-medium">
                    To donate please enter your information, click or enter the amount then press submit. You will get an email reciept. Royale &amp; The Red Cross thank you. Happy Holidays!
                  </div>
                  <div class="form-row">
                      <div class="form-area"><input type="text" required class="card-name form-text form-fullwidth" autocomplete="off" name="name" placeholder="Name on card" /></div>
                  </div>
                  <div class="form-row">
                      <div class="form-area"><input type="email" required class="form-text form-fullwidth" autocomplete="off" name="email" placeholder="Email address" /></div>
                  </div>
                  <div class="form-row">
                      <div class="form-area"><input type="text" required size="20" autocomplete="off" class="card-number form-text form-cc" placeholder="Card number" value="<?=$portable['payCard']?>" /></div><div class="form-area cvv"><input type="text" size="4" autocomplete="off" class="card-cvc form-text form-cvv t-center" placeholder="CVV" value="<?=$portable['payCvv']?>" /></div>
                  </div>
                  <div class="form-row">
                      <label class="t-medium">Exp date:&nbsp;</label>
                      <div class="form-area"><input type="text" required size="2" class="card-expiry-month form-month form-text t-center" placeholder="MM" value="<?=$portable['payMonth']?>" /></div>
                      <span> / </span>
                      <div class="form-area"><input type="text" required size="4" class="card-expiry-year form-year form-text t-center" placeholder="YYYY" value="<?=$portable['payYear']?>" /></div>
                    <div id="accepted-cards-images" class="form-cards"></div>
                  </div>
                  <div class="form-row">
                    <input type="submit" class="submit-button spritebutton standardbutton" value="" alt="Submit">
                    <input id="subscribebox" type="checkbox" name="subscribe" checked="checked"><label for="subscribebox" class="t-medium yellow form-subscribe"> Subscribe to our mailing list</label>
                  </div>
                  <div class="t-small">Questions / Concerns? Contact us at hello@weareroyale.com</div>
                </div>
              </form>
            </div>